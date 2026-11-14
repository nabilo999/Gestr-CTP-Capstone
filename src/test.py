import pandas as pd

data = pd.DataFrame({
    "numbers":[1,2],
    "name":["suliman","ali"],
    "names":["cars","toyta"]
})
print(data["numbers"])