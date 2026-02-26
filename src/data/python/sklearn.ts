export const sklearn = {
  name: "Scikit-learn",
  import: "from sklearn import ...",
  categories: [
    {
      title: "Data Preprocessing",
      items: [
        { snippet: "from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)", desc: "Standardize features (mean=0, std=1)" },
        { snippet: "from sklearn.preprocessing import MinMaxScaler\nscaler = MinMaxScaler()\nX_scaled = scaler.fit_transform(X)", desc: "Scale features to [0, 1]" },
        { snippet: "from sklearn.preprocessing import LabelEncoder\nle = LabelEncoder()\ny_encoded = le.fit_transform(y)", desc: "Encode target labels as integers" },
        { snippet: "from sklearn.preprocessing import OneHotEncoder\nohe = OneHotEncoder()\nX_enc = ohe.fit_transform(X)", desc: "One-hot encode categorical features" },
        { snippet: "from sklearn.impute import SimpleImputer\nimp = SimpleImputer(strategy='mean')\nX_imp = imp.fit_transform(X)", desc: "Fill missing values with mean" },
        { snippet: "from sklearn.preprocessing import PolynomialFeatures\npoly = PolynomialFeatures(degree=2)\nX_poly = poly.fit_transform(X)", desc: "Generate polynomial features" },
      ],
    },
    {
      title: "Train / Test Split",
      items: [
        { snippet: "from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)", desc: "80/20 train-test split" },
        { snippet: "train_test_split(X, y, test_size=0.2, stratify=y)", desc: "Stratified split for imbalanced classes" },
      ],
    },
    {
      title: "Classification",
      items: [
        { snippet: "from sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)", desc: "Logistic Regression" },
        { snippet: "from sklearn.tree import DecisionTreeClassifier\nmodel = DecisionTreeClassifier(max_depth=5)", desc: "Decision Tree" },
        { snippet: "from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(n_estimators=100)", desc: "Random Forest" },
        { snippet: "from sklearn.ensemble import GradientBoostingClassifier\nmodel = GradientBoostingClassifier()", desc: "Gradient Boosting" },
        { snippet: "from sklearn.svm import SVC\nmodel = SVC(kernel='rbf', C=1.0)", desc: "Support Vector Classifier" },
        { snippet: "from sklearn.neighbors import KNeighborsClassifier\nmodel = KNeighborsClassifier(n_neighbors=5)", desc: "K-Nearest Neighbors" },
        { snippet: "from sklearn.naive_bayes import GaussianNB\nmodel = GaussianNB()", desc: "Gaussian Naive Bayes" },
      ],
    },
    {
      title: "Regression",
      items: [
        { snippet: "from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)", desc: "Linear Regression" },
        { snippet: "from sklearn.linear_model import Ridge\nmodel = Ridge(alpha=1.0)", desc: "Ridge regression (L2)" },
        { snippet: "from sklearn.linear_model import Lasso\nmodel = Lasso(alpha=0.1)", desc: "Lasso regression (L1)" },
        { snippet: "from sklearn.ensemble import RandomForestRegressor\nmodel = RandomForestRegressor(n_estimators=100)", desc: "Random Forest Regressor" },
        { snippet: "from sklearn.svm import SVR\nmodel = SVR(kernel='rbf')", desc: "Support Vector Regressor" },
      ],
    },
    {
      title: "Clustering",
      items: [
        { snippet: "from sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=3, random_state=42)\nlabels = kmeans.fit_predict(X)", desc: "K-Means clustering" },
        { snippet: "from sklearn.cluster import DBSCAN\ndb = DBSCAN(eps=0.5, min_samples=5)\nlabels = db.fit_predict(X)", desc: "DBSCAN density clustering" },
        { snippet: "from sklearn.cluster import AgglomerativeClustering\nagg = AgglomerativeClustering(n_clusters=3)\nlabels = agg.fit_predict(X)", desc: "Agglomerative hierarchical clustering" },
      ],
    },
    {
      title: "Model Evaluation",
      items: [
        { snippet: "model.score(X_test, y_test)", desc: "Default accuracy/R² score" },
        { snippet: "from sklearn.metrics import accuracy_score\naccuracy_score(y_test, y_pred)", desc: "Classification accuracy" },
        { snippet: "from sklearn.metrics import classification_report\nprint(classification_report(y_test, y_pred))", desc: "Precision, recall, F1 report" },
        { snippet: "from sklearn.metrics import confusion_matrix\nconfusion_matrix(y_test, y_pred)", desc: "Confusion matrix" },
        { snippet: "from sklearn.metrics import mean_squared_error\nmse = mean_squared_error(y_test, y_pred)", desc: "Mean Squared Error" },
        { snippet: "from sklearn.metrics import r2_score\nr2_score(y_test, y_pred)", desc: "R² coefficient of determination" },
        { snippet: "from sklearn.metrics import roc_auc_score\nroc_auc_score(y_test, y_prob)", desc: "ROC-AUC score" },
      ],
    },
    {
      title: "Cross-Validation & Tuning",
      items: [
        { snippet: "from sklearn.model_selection import cross_val_score\nscores = cross_val_score(model, X, y, cv=5)", desc: "5-fold cross-validation" },
        { snippet: "from sklearn.model_selection import GridSearchCV\ngrid = GridSearchCV(model, params, cv=5)\ngrid.fit(X_train, y_train)\nbest = grid.best_estimator_", desc: "Grid search hyperparameter tuning" },
        { snippet: "from sklearn.model_selection import RandomizedSearchCV\nsearch = RandomizedSearchCV(model, params, n_iter=20, cv=5)", desc: "Random search hyperparameter tuning" },
        { snippet: "grid.best_params_", desc: "Best parameters found by grid search" },
        { snippet: "grid.cv_results_", desc: "Full results of grid search" },
      ],
    },
    {
      title: "Pipelines & Feature Selection",
      items: [
        { snippet: "from sklearn.pipeline import Pipeline\npipe = Pipeline([('scaler', StandardScaler()), ('model', LogisticRegression())])\npipe.fit(X_train, y_train)", desc: "Build a preprocessing + model pipeline" },
        { snippet: "from sklearn.feature_selection import SelectKBest, f_classif\nselector = SelectKBest(f_classif, k=10)\nX_new = selector.fit_transform(X, y)", desc: "Select top 10 features by ANOVA F-score" },
        { snippet: "from sklearn.decomposition import PCA\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X)", desc: "PCA dimensionality reduction to 2D" },
        { snippet: "model.feature_importances_", desc: "Feature importances (tree models)" },
      ],
    },
  ],
};