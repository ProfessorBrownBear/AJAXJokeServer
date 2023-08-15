\documentclass[12pt,a4paper]{article}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{listings}
\usepackage{xcolor}

\definecolor{codegreen}{rgb}{0,0.6,0}
\definecolor{codegray}{rgb}{0.5,0.5,0.5}
\definecolor{codepurple}{rgb}{0.58,0,0.82}
\definecolor{backcolour}{rgb}{0.95,0.95,0.92}

\lstdefinestyle{mystyle}{
    backgroundcolor=\color{backcolour},   
    commentstyle=\color{codegreen},
    keywordstyle=\color{magenta},
    numberstyle=\tiny\color{codegray},
    stringstyle=\color{codepurple},
    basicstyle=\ttfamily\small,
    breakatwhitespace=false,         
    breaklines=true,                 
    captionpos=b,                    
    keepspaces=true,                 
    numbers=left,                    
    numbersep=5pt,                  
    showspaces=false,                
    showstringspaces=false,
    showtabs=false,                  
    tabsize=2
}
\lstset{style=mystyle}

\title{Node.js Fullstack JavaScript Development Lab Workbook}
\author{Your Institution}
\date{}

\begin{document}

\maketitle

\section{Objective}
In this lab, students will create a simple Node.js microservice that serves programmer jokes. Additionally, an AJAX client wrapped in an HTML page will fetch jokes and display them dynamically. 

\section{Prerequisites}
\begin{itemize}
    \item Node.js and npm installed.
    \item Familiarity with JavaScript, HTML, CSS, jQuery, and AJAX.
\end{itemize}

\section{Steps}

\subsection{Setup Your Node.js Project}
\begin{enumerate}
    \item Create a new directory for the project:
    \begin{lstlisting}[language=bash]
mkdir node-jokes-microservice
cd node-jokes-microservice
    \end{lstlisting}
    \item Initialize a new Node.js project:
    \begin{lstlisting}[language=bash]
npm init -y
    \end{lstlisting}
\end{enumerate}

\subsection{Install Required Packages}
\begin{lstlisting}[language=bash]
npm install express body-parser cors
\end{lstlisting}

\subsection{Server Setup}
\begin{enumerate}[resume]
    \item Create a server file:
    \begin{lstlisting}[language=bash]
touch server.js
    \end{lstlisting}
    \item Implement the server logic:
    \lstinputlisting[language=javascript]{server.js} % You would replace this with the actual path to your server.js file or directly input the content.
\end{enumerate}

\subsection{Client Setup}
\begin{enumerate}[resume]
    \item Create client-side files:
    \begin{lstlisting}[language=bash]
touch index.html client.js styles.css
    \end{lstlisting}
    \item Structure your HTML:
    \lstinputlisting[language=HTML]{index.html} % Similarly, replace this with the path to your index.html or input content.
    \item Implement client-side JavaScript:
    \lstinputlisting[language=javascript]{client.js} % And this one with the path to client.js or input content.
    \item Style your client:
    \lstinputlisting[language=css]{styles.css} % Finally, replace this with the path to styles.css or input content.
\end{enumerate}

\subsection{Testing the Application}
\begin{enumerate}[resume]
    \item Start the server:
    \begin{lstlisting}[language=bash]
node server.js
    \end{lstlisting}
    \item Open \texttt{index.html} in a web browser and click the button to fetch jokes. Observe the background color change with each fetch.
\end{enumerate}

\section{Conclusion}
Upon completion, students should have a functional AJAX microservice in Node.js paired with an interactive client-side webpage. This lab offers a foundational experience in connecting client-side interactions with server-side responses.

\end{document}
