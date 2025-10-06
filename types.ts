// Fix: The original content of this file was a React component, which is incorrect for a type definition file.
// It also had a circular import.
// Replaced the component with the correct type definitions for the application.
export interface Recommendation {
  point: string;
  explanation: string;
}

export interface Metrics {
  precision: number;
  recall: number;
  f1_score: number;
  roc_auc: number;
}

export interface ConfusionMatrixData {
  true_positive: number;
  false_positive: number;
  true_negative: number;
  false_negative: number;
}

export interface AnalysisResult {
  algorithm: {
    name: string;
    rationale: string;
  };
  metrics: Metrics;
  confusion_matrix: ConfusionMatrixData;
  recommendations: {
    retention_strategies: Recommendation[];
    model_improvements: Recommendation[];
  };
}
