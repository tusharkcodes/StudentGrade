import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVR
from sklearn.metrics import mean_squared_error
from sklearn.metrics import r2_score

df = pd.read_csv('./StudentPerformanceFactors.csv')

df.isna().sum()

df.info()

df = df.dropna(subset=['Teacher_Quality','Parental_Education_Level','Distance_from_Home'])

df.isna().sum()

categorical_cols = df.select_dtypes(include=['object']).columns

df

df_encoded = pd.get_dummies(df, columns=['Learning_Disabilities', 'School_Type','Internet_Access','Extracurricular_Activities'], drop_first=True, dtype=int)

df_encoded

mapping = {'Low': 1, 'Medium': 2, 'High': 3}
df_encoded['Teacher_Quality'] = df['Teacher_Quality'].map(mapping)

mapping = {'Low': 1, 'Medium': 2, 'High': 3}
df_encoded['Motivation_Level'] = df['Motivation_Level'].map(mapping)  

mapping = {'Low': 1, 'Medium': 2, 'High': 3}
df_encoded['Access_to_Resources'] = df['Access_to_Resources'].map(mapping)  

mapping = {'Low': 1, 'Medium': 2, 'High': 3}
df_encoded['Parental_Involvement'] = df['Parental_Involvement'].map(mapping)  

mapping = {'Near': 1, 'Moderate': 2, 'Far': 3}
df_encoded['Distance_from_Home'] = df['Distance_from_Home'].map(mapping)  

columnsDrop = ['Parental_Education_Level','Peer_Influence','Family_Income', 'Physical_Activity','Learning_Disabilities_Yes', 'Distance_from_Home','Gender']

df_encoded = df_encoded.drop(columns= columnsDrop, axis=1)

df_encoded.shape

X = df_encoded.drop('Exam_Score', axis=1)

df_encoded

y = df_encoded['Exam_Score']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestRegressor( n_estimators=500,
    max_depth=20,
    min_samples_leaf=2,
    min_samples_split=4,
    max_features='sqrt'
)

model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("R2 Score:", r2_score(y_test, y_pred))


model1 = LinearRegression()
model1.fit(X_train, y_train)

y_pred1 = model1.predict(X_test)
print("R2 Score:", r2_score(y_test, y_pred1))

# Support Vector Regression

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test) 

model2 = SVR(C= 100, epsilon= 1, gamma= 'scale', kernel= 'linear')
model2.fit(X_train_scaled, y_train)
y_pred2 = model2.predict(X_test_scaled)

print("R2 Score:", r2_score(y_test, y_pred2))
print("RMSE:", np.sqrt(mean_squared_error(y_test, y_pred2)))

import pickle
pickle.dump(model2, open('model.pkl', 'wb'))
