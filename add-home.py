#!/usr/bin/env python3
"""Run from the root of your website folder:  python3 add-home.py
Adds a "Home" link to the header nav of every .html file and makes the
header links work from any page. Originals are saved as *.html.bak."""
import re, pathlib, shutil

root = pathlib.Path('.')
nav_re = re.compile(r'(<nav\b[^>]*class="[^"]*\bnav\b[^"]*"[^>]*>)(.*?)(</nav>)', re.S)
brand_re = re.compile(r'(<a\b[^>]*class="brand"[^>]*href=")#top(")')

for f in root.rglob('*.html'):
    s = f.read_text(encoding='utf-8')
    m = nav_re.search(s)
    if not m:
        print('skipped (no nav):', f); continue
    is_home = f.resolve() == (root / 'index.html').resolve()
    inner = m.group(2)

    if not is_home:
        # point section links at the home page, e.g. #about -> /#about
        inner = re.sub(r'href="#', 'href="/#', inner)
    if not re.search(r'>\s*Home\s*</a>', inner):
        inner = '\n        <a href="%s">Home</a>' % ('#top' if is_home else '/') + inner

    new = s[:m.start()] + m.group(1) + inner + m.group(3) + s[m.end():]
    if not is_home:
        new = brand_re.sub(r'\1/\2', new)

    if new != s:
        shutil.copy(f, f.with_suffix('.html.bak'))
        f.write_text(new, encoding='utf-8')
        print('updated:', f)
    else:
        print('unchanged:', f)
