import React, { useState, useCallback } from 'react';
import { FileUpload } from './components/FileUpload';
import { Dashboard } from './components/Dashboard';
import { Loader } from './components/Loader';
import { analyzeChurnData } from './services/geminiService';
import type { AnalysisResult } from './types';
import { Header } from './components/Header';
import { Welcome } from './components/Welcome';
import { ErrorDisplay } from './components/ErrorDisplay';

const App: React.FC = () => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileAnalysis = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = async (event) => {
      const csvContent = event.target?.result as string;
      try {
        const result = await analyzeChurnData(csvContent);
        setAnalysisResult(result);
      } catch (e) {
        console.error(e);
        setError('Failed to analyze the data. The AI model might be overloaded. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    reader.onerror = () => {
        setError('Failed to read the file.');
        setIsLoading(false);
    };
    reader.readAsText(file);
  }, []);

  const handleReset = () => {
    setAnalysisResult(null);
    setIsLoading(false);
    setError(null);
    setFileName('');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        {!analysisResult && !isLoading && !error && (
            <>
                <Welcome />
                <FileUpload onFileSelect={handleFileAnalysis} disabled={isLoading} />
            </>
        )}
        
        {isLoading && <Loader fileName={fileName} />}
        {error && <ErrorDisplay message={error} onRetry={handleReset} />}

        {analysisResult && !isLoading && (
            <Dashboard result={analysisResult} onReset={handleReset} />
        )}
      </main>
    </div>
  );
};

export default App;