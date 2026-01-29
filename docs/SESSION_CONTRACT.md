# Session Contract v1

Kontrak session stabil untuk semua simulasi.

```json
{
  "version": "1.0.0",
  "simulation": { "slug": "...", "title": "...", "startedAt": "..." },
  "progress": { "currentStage": 1, "completedStages": [1], "lastSavedAt": "..." },
  "stage": {
    "pretest": { "answers": [] },
    "setup": { "goals": "" },
    "theory": { "notes": "" },
    "playground": { "interactions": [] },
    "measurement": { "metrics": {} },
    "data": { "rows": [] },
    "reflection": { "summary": "" },
    "report": { "notes": "" }
  }
}
```

- Autosave lokal menggunakan localStorage.
- Saat download, snapshot dikirim ke server untuk audit.
