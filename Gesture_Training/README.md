# Preserved earlier work

Suliman's webcam tracking and gesture-training prototype is preserved here as the
starting point for the team's next stage. It has not been discarded.

`old-gesture-demo/` contains his original:

- `hand_tracking.py`: webcam, hand-point drawing, sample capture, and live predictions.
- `train_model.py`: Random Forest training script.
- `gestures.csv`: all 445 original labeled coordinate samples, unchanged.
- `gesture_model.joblib`: the original saved classifier, unchanged.

The only change inside the archived demo is the path to `hand_landmarker.task`,
which remains at the repository root and is shared with the new collector.
`scratch/` preserves the two small Python scratch files previously under `src/`.

The new collector reuses the MediaPipe tracking approach and hand-skeleton
connections. It does not load the old gesture classifier or mix the original
samples into newly collected data. This allows the team to document the source,
person, session, and label of every new example.

To revisit the earlier demo in an environment with the collector dependencies,
plus `joblib==1.6.0` and `scikit-learn==1.9.1`, run from the repo root:

```powershell
python deprecated/old-gesture-demo/hand_tracking.py
```

The original classifier artifact identifies scikit-learn 1.9.1 as its training
version. Archived training writes only to this archived folder. The current
collector is launched using **Collect Gestures.cmd** at the repository root.
