# CMS Migration

1. Markdown conversions

   - Rename from cmsPage to md
   - All md files need a title
   - Prefer https protocol
   - Prefer internal links for flex.apache.org
   - HTML blocks must be contiguous. blank lines will move html into code blocks
   - Headings should not use trailing ##
   - Fenced code blocks differ and charactoer entities must not be used

   See [changes.txt](changes.txt)

2. Theme Template

   CMS templates were converted into `base.html`

3. Configuration

   See [pelicanconf.py](../pelicanconf.py)

4. Pelican ASF plugin configuration

   [asfgenid.py](../theme/plugins/asfgenid.py)

   - 'unsafe_tags': True  # allow style, script, and iframe tags
   - 'metadata': False    # no metadata replacement in markdown files
   - 'elements': False    # CMS didn't use mdx_elementid featuresz
   - 'headings': True     # Fix up headings w/ permalinks
   - 'headings_re': r'^h[1-4]'
   - 'permalinks': True,
   - 'toc': False         # does not use [TOC]
   - 'toc_headers': r"h[1-4]",
   - 'tables': True       # Fix up for markdown table class
