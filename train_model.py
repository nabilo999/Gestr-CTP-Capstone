import csv
from collections import Counter
from pathlib import Path

from joblib import dump
from sklearn.ensemble import RandomForestClassifier

folder = Path(__file__).parent

X = []  # Hand coordinates
y = []  # Gesture labels

with (folder / "gestures.csv").open(newline="") as file:
    for row in csv.reader(file):
        if row:
            y.append(row[0])
            X.append([float(value) for value in row[1:]])

for gesture, count in Counter(y).items():
    print(f"{gesture}: {count} examples")

model = RandomForestClassifier(random_state=42)
model.fit(X, y)

dump(model, folder / "gesture_model.joblib")
print("Training complete! Saved gesture_model.joblib")