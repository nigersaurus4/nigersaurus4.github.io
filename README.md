# yuan-chengzhi.github.io

Personal research atlas for Chengzhi Yuan / 袁诚志.

The site is intentionally data-driven: add a project card in `data/projects.json` and `data/projects.zh-CN.json`, update the relation lists in `data/research-map.json` and `data/research-map.zh-CN.json`, and add a future-facing hypothesis to `data/horizon.json` and `data/horizon.zh-CN.json` when a new direction becomes meaningful. The English homepage is at `/`; the Chinese edition is at `/zh/`. Keep project IDs and anchors aligned across both languages so language switching preserves the same research graph. The public site separates collaborative work, personal contribution, evidence, and working directions. Project cards record work and evidence; horizon cards record questions that still need to be tested.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` or `http://localhost:8000/zh/`.
