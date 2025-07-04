const quizzes = {
  questions: [
    {
  question: "Which metric is often used to assess liquidity risk?",
  options: [
    "Bid-ask spread",
    "Sharpe Ratio",
    "Information Ratio"
  ],
  correct: 0,
  explanation: "A wider bid-ask spread indicates lower liquidity."
},
{
  question: "What is a quant fund?",
  options: [
    "A fund that uses mathematical models to make decisions",
    "A fund that only buys government bonds",
    "A fund that invests in startups"
  ],
  correct: 0,
  explanation: "Quant funds rely on systematic quantitative strategies."
},
{
  question: "The concept of mean reversion implies that prices:",
  options: [
    "Tend to return to an average level over time",
    "Follow a random walk indefinitely",
    "Only move upwards"
  ],
  correct: 0,
  explanation: "Mean reversion assumes prices revert to a mean."
},
{
  question: "Which factor is commonly associated with value investing?",
  options: [
    "High book-to-market ratios",
    "Low volatility",
    "Momentum"
  ],
  correct: 0,
  explanation: "Value stocks have high book-to-market ratios."
},
{
  question: "A z-score measures:",
  options: [
    "Distance from the mean in standard deviations",
    "Correlation between variables",
    "Portfolio beta"
  ],
  correct: 0,
  explanation: "Z-score shows how far a value is from the mean."
},
{
  question: "High-frequency trading primarily relies on:",
  options: [
    "Speed of execution",
    "Long-term fundamental analysis",
    "Quarterly reports"
  ],
  correct: 0,
  explanation: "HFT exploits small inefficiencies with speed."
},
{
  question: "Risk parity strategies allocate based on:",
  options: [
    "Equal risk contributions",
    "Equal capital",
    "Market capitalization weights"
  ],
  correct: 0,
  explanation: "Risk parity allocates to equalize risk."
},
{
  question: "Which measure adjusts for tail risk?",
  options: [
    "Conditional Value at Risk (CVaR)",
    "Beta",
    "Alpha"
  ],
  correct: 0,
  explanation: "CVaR considers losses beyond VaR."
},
{
  question: "In machine learning, cross-validation is used to:",
  options: [
    "Assess model performance out of sample",
    "Reduce trading commissions",
    "Increase liquidity"
  ],
  correct: 0,
  explanation: "Cross-validation tests models on unseen data."
},
{
  question: "Which metric indicates correlation strength between two variables?",
  options: [
    "R-squared",
    "Skewness",
    "Kurtosis"
  ],
  correct: 0,
  explanation: "R-squared shows fit; correlation coefficient measures strength."
},
{
  question: "Backtesting bias can result from:",
  options: [
    "Using future data in model design",
    "Random sampling",
    "Bootstrap aggregation"
  ],
  correct: 0,
  explanation: "Look-ahead bias contaminates backtesting results."
},
{
  question: "What is survivorship bias?",
  options: [
    "Excluding failed funds or companies",
    "Including all historical data",
    "Randomly deleting data"
  ],
  correct: 0,
  explanation: "It skews results by omitting failures."
},
{
  question: "A quant strategy with low turnover likely has:",
  options: [
    "Lower transaction costs",
    "Higher execution costs",
    "Higher slippage"
  ],
  correct: 0,
  explanation: "Low turnover reduces trading costs."
},
{
  question: "What is the Kelly Criterion used for?",
  options: [
    "Optimal bet sizing",
    "Estimating volatility",
    "Measuring alpha"
  ],
  correct: 0,
  explanation: "Kelly maximizes growth rate by sizing positions."
},
{
  question: "A strategy with high alpha but high volatility may have:",
  options: [
    "High Sharpe Ratio if risk-adjusted returns remain strong",
    "Low beta",
    "Guaranteed returns"
  ],
  correct: 0,
  explanation: "Sharpe adjusts returns for volatility."
},
{
  question: "The efficient frontier illustrates:",
  options: [
    "Portfolios maximizing return for a given risk",
    "Company growth rates",
    "Interest rate curves"
  ],
  correct: 0,
  explanation: "Efficient frontier plots risk-return combinations."
},
{
  question: "Quantitative easing refers to:",
  options: [
    "Central bank bond purchases",
    "Raising interest rates",
    "Cutting corporate taxes"
  ],
  correct: 0,
  explanation: "QE injects liquidity by buying assets."
},
{
  question: "What is heteroskedasticity?",
  options: [
    "Non-constant variance of errors",
    "High correlation",
    "Data stationarity"
  ],
  correct: 0,
  explanation: "Variance of errors changes across observations."
},
{
  question: "Which risk factor relates to interest rate changes?",
  options: [
    "Duration",
    "Momentum",
    "Size factor"
  ],
  correct: 0,
  explanation: "Duration measures sensitivity to rates."
},
{
  question: "Market microstructure studies:",
  options: [
    "How orders are matched and executed",
    "Dividend policy",
    "Taxation"
  ],
  correct: 0,
  explanation: "It analyzes trading mechanics."
},
{
  question: "Which asset class is typically least liquid?",
  options: [
    "Private equity",
    "Treasury bills",
    "Large-cap stocks"
  ],
  correct: 0,
  explanation: "Private equity has long lock-ups."
},
{
  question: "In regression, multicollinearity refers to:",
  options: [
    "Predictors being highly correlated",
    "Residuals not summing to zero",
    "Heteroskedastic errors"
  ],
  correct: 0,
  explanation: "Multicollinearity inflates variance of estimates."
},
{
  question: "Which method reduces overfitting?",
  options: [
    "Regularization",
    "Increasing model complexity",
    "Using more features indiscriminately"
  ],
  correct: 0,
  explanation: "Regularization penalizes complexity."
},
{
  question: "Which ratio measures performance per unit of downside deviation?",
  options: [
    "Sortino Ratio",
    "Sharpe Ratio",
    "Treynor Ratio"
  ],
  correct: 0,
  explanation: "Sortino focuses on downside risk."
},
{
  question: "A portfolio with low beta but negative alpha indicates:",
  options: [
    "Underperformance after adjusting for risk",
    "Market outperformance",
    "No volatility"
  ],
  correct: 0,
  explanation: "Negative alpha shows underperformance."
},
{
  question: "Bayesian methods in finance allow for:",
  options: [
    "Updating probabilities as new data arrives",
    "Guaranteed predictions",
    "Linear scaling of all returns"
  ],
  correct: 0,
  explanation: "Bayesian inference updates beliefs."
},
{
  question: "Which approach systematically buys recent winners?",
  options: [
    "Momentum",
    "Value investing",
    "Arbitrage"
  ],
  correct: 0,
  explanation: "Momentum follows trends."
},
{
  question: "A low tracking error implies:",
  options: [
    "Closely tracking the benchmark",
    "High alpha",
    "High volatility"
  ],
  correct: 0,
  explanation: "Low tracking error means low deviation from benchmark."
},
{
  question: "Which method helps to manage model complexity?",
  options: [
    "Regularization",
    "Adding more variables",
    "Random walk hypothesis"
  ],
  correct: 0,
  explanation: "Regularization controls overfitting."
},
{
  question: "A quant strategy may fail if:",
  options: [
    "Market conditions change",
    "It has low turnover",
    "It uses factor models"
  ],
  correct: 0,
  explanation: "Regime shifts can break strategies."
},
{
  question: "Cross-sectional momentum refers to:",
  options: [
    "Buying assets outperforming peers",
    "Holding assets for long term only",
    "Avoiding leverage"
  ],
  correct: 0,
  explanation: "Cross-sectional momentum buys relative winners."
},
{
  question: "Maximum drawdown measures:",
  options: [
    "Largest peak-to-trough decline",
    "Average volatility",
    "Annualized return"
  ],
  correct: 0,
  explanation: "It is the worst loss from a peak."
},
{
  question: "Value investing typically involves buying stocks with:",
  options: [
    "Low price-to-earnings ratios",
    "High momentum",
    "High volatility"
  ],
  correct: 0,
  explanation: "Value stocks are relatively cheap."
},
{
  question: "A low p-value (<0.05) suggests:",
  options: [
    "Rejecting the null hypothesis",
    "Accepting the null hypothesis",
    "Inconclusive evidence"
  ],
  correct: 0,
  explanation: "It indicates statistical significance."
},
{
  question: "Which model prices options based on volatility and time decay?",
  options: [
    "Black-Scholes Model",
    "CAPM",
    "Fama-French"
  ],
  correct: 0,
  explanation: "Black-Scholes calculates option prices."
},
{
  question: "Risk-adjusted return ratios include:",
  options: [
    "Sharpe and Sortino",
    "Alpha only",
    "Beta only"
  ],
  correct: 0,
  explanation: "Sharpe and Sortino adjust for risk."
},
{
  question: "Machine learning models in finance must address:",
  options: [
    "Overfitting and data snooping",
    "Guaranteed profits",
    "Certainty equivalence"
  ],
  correct: 0,
  explanation: "Overfitting reduces reliability."
},
{
  question: "Which factor is commonly associated with higher returns over time?",
  options: [
    "Size factor (small caps)",
    "Large cap exposure",
    "Low volatility only"
  ],
  correct: 0,
  explanation: "Small caps often outperform."
}
,
{
  question: "What is the purpose of a stop-loss order?",
  options: [
    "Limit losses by automatically selling at a set price",
    "Guarantee profits",
    "Increase leverage"
  ],
  correct: 0,
  explanation: "Stop-loss helps control downside risk."
},
{
  question: "Which of the following is a common backtesting pitfall?",
  options: [
    "Look-ahead bias",
    "Using out-of-sample data",
    "Randomizing data"
  ],
  correct: 0,
  explanation: "Look-ahead bias uses future data improperly."
},
{
  question: "Which technique helps reduce model variance?",
  options: [
    "Bagging",
    "Overfitting",
    "Ignoring data"
  ],
  correct: 0,
  explanation: "Bagging averages models to reduce variance."
},
{
  question: "What does a high Sharpe Ratio indicate?",
  options: [
    "Better risk-adjusted returns",
    "Higher risk",
    "More volatility"
  ],
  correct: 0,
  explanation: "Higher Sharpe means more return per unit risk."
},
{
  question: "Factor investing attempts to capture:",
  options: [
    "Returns explained by common risk factors",
    "Market timing profits",
    "Pure alpha"
  ],
  correct: 0,
  explanation: "Factors explain systematic return drivers."
},
{
  question: "Which data issue arises when non-stationary data is used?",
  options: [
    "Spurious regression",
    "Proper model fit",
    "Constant variance"
  ],
  correct: 0,
  explanation: "Spurious regressions give misleading results."
},
{
  question: "Which of these is NOT a typical factor?",
  options: [
    "Astrological sign",
    "Momentum",
    "Value"
  ],
  correct: 0,
  explanation: "Astrology is not a finance factor."
},
{
  question: "Which method estimates expected returns based on historical means?",
  options: [
    "Historical average return",
    "CAPM",
    "Black-Scholes"
  ],
  correct: 0,
  explanation: "Simple historical averaging uses past data."
},
{
  question: "A ‘long-short’ portfolio involves:",
  options: [
    "Buying undervalued and shorting overvalued assets",
    "Only buying stocks",
    "Holding cash only"
  ],
  correct: 0,
  explanation: "Long-short bets on relative mispricing."
},
{
  question: "Which of these is a downside risk measure?",
  options: [
    "Value at Risk (VaR)",
    "Beta",
    "Alpha"
  ],
  correct: 0,
  explanation: "VaR estimates potential losses."
},
{
  question: "Overfitting usually leads to:",
  options: [
    "Poor performance on new data",
    "Better predictions",
    "Lower variance"
  ],
  correct: 0,
  explanation: "Overfit models don’t generalize well."
},
{
  question: "Which is an example of a machine learning algorithm?",
  options: [
    "Random Forest",
    "CAPM",
    "Black-Litterman"
  ],
  correct: 0,
  explanation: "Random Forest is an ensemble ML method."
},
{
  question: "Which of the following is a liquidity measure?",
  options: [
    "Bid-ask spread",
    "Sharpe ratio",
    "Alpha"
  ],
  correct: 0,
  explanation: "Bid-ask spread reflects transaction costs."
},
{
  question: "Why is diversification important?",
  options: [
    "Reduces unsystematic risk",
    "Increases market risk",
    "Guarantees profits"
  ],
  correct: 0,
  explanation: "Diversification lowers asset-specific risk."
},
{
  question: "What is the main goal of portfolio optimization?",
  options: [
    "Maximize return for a given level of risk",
    "Maximize volatility",
    "Minimize returns"
  ],
  correct: 0,
  explanation: "Optimization finds efficient risk-return tradeoffs."
},
{
  question: "Which risk metric is best for fat-tailed distributions?",
  options: [
    "Conditional Value at Risk (CVaR)",
    "Beta",
    "Standard deviation"
  ],
  correct: 0,
  explanation: "CVaR considers tail losses better than variance."
},
{
  question: "In quantitative finance, ‘alpha decay’ means:",
  options: [
    "Strategy loses effectiveness over time",
    "Alpha increases steadily",
    "No change in alpha"
  ],
  correct: 0,
  explanation: "Alpha often degrades as markets adapt."
},
{
  question: "Which tool visualizes portfolio performance?",
  options: [
    "Equity curve",
    "Histograms",
    "Scatter plots"
  ],
  correct: 0,
  explanation: "Equity curves show cumulative returns over time."
},
{
  question: "Which is NOT a characteristic of a good quantitative model?",
  options: [
    "Robustness",
    "Overfitting",
    "Interpretability"
  ],
  correct: 0,
  explanation: "Overfitting is a flaw, not a feature."
},
{
  question: "What is a ‘factor load’?",
  options: [
    "Sensitivity to a risk factor",
    "The asset price",
    "The expected return"
  ],
  correct: 0,
  explanation: "Loadings measure exposure to factors."
},
{
  question: "Why use principal component analysis (PCA)?",
  options: [
    "To reduce dimensionality of data",
    "To increase number of variables",
    "To maximize variance"
  ],
  correct: 0,
  explanation: "PCA simplifies data while retaining info."
},
{
  question: "The ‘no free lunch theorem’ implies:",
  options: [
    "No model is best for all problems",
    "All models always work",
    "Higher risk guarantees profit"
  ],
  correct: 0,
  explanation: "Models work better in some cases than others."
},
{
  question: "Which is a common cause of data snooping bias?",
  options: [
    "Repeatedly testing on the same dataset",
    "Using fresh data",
    "Ignoring data"
  ],
  correct: 0,
  explanation: "Repeated testing inflates false positives."
},
{
  question: "What is the goal of the Kelly Criterion?",
  options: [
    "Maximize logarithmic growth of capital",
    "Minimize risk",
    "Maximize volatility"
  ],
  correct: 0,
  explanation: "Kelly finds optimal bet size for growth."
},
{
  question: "Which term describes the ability to buy/sell assets quickly?",
  options: [
    "Liquidity",
    "Volatility",
    "Alpha"
  ],
  correct: 0,
  explanation: "Liquidity refers to ease of trading."
},
{
  question: "Which describes ‘momentum investing’?",
  options: [
    "Buying past winners and selling past losers",
    "Buying undervalued stocks only",
    "Buying bonds"
  ],
  correct: 0,
  explanation: "Momentum follows recent performance trends."
},
{
  question: "Which term is used to describe a statistical error due to sample size?",
  options: [
    "Sampling error",
    "Beta",
    "Alpha"
  ],
  correct: 0,
  explanation: "Sampling error arises from limited data."
},
{
  question: "What is ‘black swan’ event?",
  options: [
    "Rare, unpredictable event with big impact",
    "Common market fluctuation",
    "Expected risk"
  ],
  correct: 0,
  explanation: "Black swans are extreme outlier events."
},
{
  question: "Which of these helps prevent overfitting?",
  options: [
    "Regularization",
    "Increasing model parameters",
    "Ignoring validation"
  ],
  correct: 0,
  explanation: "Regularization penalizes complexity."
},
{
  question: "Which is a common performance metric?",
  options: [
    "Sharpe Ratio",
    "Price to Earnings Ratio",
    "Dividend Yield"
  ],
  correct: 0,
  explanation: "Sharpe adjusts returns for risk."
},
{
  question: "What is ‘alpha’ in finance?",
  options: [
    "Return exceeding benchmark",
    "Risk-free rate",
    "Market index return"
  ],
  correct: 0,
  explanation: "Alpha is active return beyond market."
},
{
  question: "Which describes ‘factor investing’?",
  options: [
    "Investing based on characteristics explaining returns",
    "Random stock picking",
    "Timing the market"
  ],
  correct: 0,
  explanation: "Factors explain systematic return drivers."
},
{
  question: "The term ‘backtest’ means:",
  options: [
    "Testing a strategy on historical data",
    "Predicting future prices",
    "Ignoring past data"
  ],
  correct: 0,
  explanation: "Backtesting evaluates strategy historically."
},
{
  question: "What does ‘volatility clustering’ mean?",
  options: [
    "Periods of high volatility tend to cluster",
    "Volatility is constant over time",
    "Volatility never changes"
  ],
  correct: 0,
  explanation: "Volatility often comes in bursts."
},
{
  question: "In finance, ‘liquidity risk’ refers to:",
  options: [
    "Difficulty selling assets quickly",
    "Market risk",
    "Credit risk"
  ],
  correct: 0,
  explanation: "Liquidity risk is inability to trade easily."
},
{
  question: "Which is an example of a derivative?",
  options: [
    "Option contract",
    "Stock",
    "Bond"
  ],
  correct: 0,
  explanation: "Options derive value from underlying assets."
},
{
  question: "What is a ‘stop-limit’ order?",
  options: [
    "An order to buy/sell at a limit price after a stop price is triggered",
    "Immediate market order",
    "Order to buy at any price"
  ],
  correct: 0,
  explanation: "Combines stop trigger with limit price."
},

	
	
	
	
	
	
	{
      question: "What does the Sharpe Ratio measure?",
      options: [
        "Return per unit of total risk",
        "Return per unit of systematic risk",
        "Return per unit of alpha"
      ],
      correct: 0,
      explanation: "Sharpe Ratio = (Return - Risk-free rate) / Standard deviation."
    },
    {
      question: "Which model expands CAPM by adding size and value factors?",
      options: [
        "Fama-French Three-Factor Model",
        "Treynor Ratio",
        "Sortino Ratio"
      ],
      correct: 0,
      explanation: "Fama-French includes size and value premiums."
    },
    {
      question: "What does beta measure?",
      options: [
        "Systematic risk relative to the market",
        "Company's dividend policy",
        "Idiosyncratic risk"
      ],
      correct: 0,
      explanation: "Beta is sensitivity to market movements."
    },
    {
      question: "Alpha in investing refers to:",
      options: [
        "Excess return over benchmark",
        "Standard deviation",
        "Skewness"
      ],
      correct: 0,
      explanation: "Alpha measures active return over expected return."
    },
    {
      question: "Which measure penalizes downside volatility only?",
      options: [
        "Sortino Ratio",
        "Sharpe Ratio",
        "Treynor Ratio"
      ],
      correct: 0,
      explanation: "Sortino uses downside deviation rather than total volatility."
    },
    {
      question: "The Information Ratio measures:",
      options: [
        "Return relative to benchmark tracking error",
        "Volatility adjusted return",
        "Liquidity-adjusted return"
      ],
      correct: 0,
      explanation: "Information Ratio = Active return / Tracking error."
    },
    {
      question: "Which factor is NOT in the Fama-French Five-Factor Model?",
      options: [
        "Momentum",
        "Profitability",
        "Investment"
      ],
      correct: 0,
      explanation: "Momentum is not included in the Five-Factor Model."
    },
    {
      question: "What does the Treynor Ratio use in the denominator?",
      options: [
        "Beta",
        "Standard deviation",
        "Alpha"
      ],
      correct: 0,
      explanation: "Treynor Ratio = Excess return / Beta."
    },
    {
      question: "A high R-squared indicates:",
      options: [
        "High correlation with benchmark",
        "High excess return",
        "High alpha"
      ],
      correct: 0,
      explanation: "R-squared shows % variance explained by the model."
    },
    {
      question: "Which approach uses historical simulations to estimate risk?",
      options: [
        "Backtesting",
        "Monte Carlo Simulation",
        "Principal Component Analysis"
      ],
      correct: 0,
      explanation: "Backtesting applies historical data to test strategies."
    },
    {
      question: "Which method decomposes portfolio risk into independent factors?",
      options: [
        "Factor Analysis",
        "Time Series Regression",
        "Duration Analysis"
      ],
      correct: 0,
      explanation: "Factor analysis isolates underlying risk drivers."
    },
    {
      question: "Which risk measure estimates potential loss at a given confidence level?",
      options: [
        "Value at Risk (VaR)",
        "Beta",
        "Alpha"
      ],
      correct: 0,
      explanation: "VaR quantifies maximum expected loss over a period."
    },
    {
      question: "What is overfitting in quantitative models?",
      options: [
        "Model too closely fits training data noise",
        "Model generalizes well",
        "Model uses too few variables"
      ],
      correct: 0,
      explanation: "Overfitting reduces predictive power out-of-sample."
    },
    {
      question: "Which technique is commonly used for feature selection?",
      options: [
        "Regularization (e.g., LASSO)",
        "Bootstrapping",
        "Bagging"
      ],
      correct: 0,
      explanation: "LASSO shrinks coefficients, selecting relevant features."
    },
    {
      question: "What is p-hacking?",
      options: [
        "Data mining until finding significant results",
        "Testing only one hypothesis",
        "Avoiding statistical tests"
      ],
      correct: 0,
      explanation: "P-hacking inflates false discovery rates."
    },
    {
      question: "Which method combines predictions from multiple models?",
      options: [
        "Ensemble Learning",
        "Single Regression",
        "Principal Component Analysis"
      ],
      correct: 0,
      explanation: "Ensembles aggregate model outputs."
    },
    {
      question: "The Black-Litterman model combines investor views with:",
      options: [
        "Market equilibrium returns",
        "Risk-free rate only",
        "Bond yields only"
      ],
      correct: 0,
      explanation: "It blends views and equilibrium returns."
    },
    {
      question: "Which technique reduces dimensionality while preserving variance?",
      options: [
        "Principal Component Analysis",
        "Monte Carlo Simulation",
        "Bootstrapping"
      ],
      correct: 0,
      explanation: "PCA identifies key components explaining variance."
    },
    {
      question: "What does tracking error measure?",
      options: [
        "Volatility of excess returns vs benchmark",
        "Portfolio liquidity",
        "Portfolio turnover"
      ],
      correct: 0,
      explanation: "Tracking error is standard deviation of active returns."
    },
    {
      question: "A low p-value indicates:",
      options: [
        "Strong evidence against the null hypothesis",
        "Weak evidence against the null hypothesis",
        "Data error"
      ],
      correct: 0,
      explanation: "Low p-value implies statistical significance."
    },
    {
      question: "Hedge funds often use which approach?",
      options: [
        "Quantitative trading",
        "Buy and hold only",
        "Fixed income only"
      ],
      correct: 0,
      explanation: "Many hedge funds use quantitative strategies."
    },
    {
      question: "Which measure adjusts returns for skewness and kurtosis?",
      options: [
        "Omega Ratio",
        "Sharpe Ratio",
        "Beta"
      ],
      correct: 0,
      explanation: "Omega considers higher moments of distribution."
    },
    {
      question: "What is a drawdown?",
      options: [
        "Peak-to-trough decline",
        "Annual volatility",
        "Expected return"
      ],
      correct: 0,
      explanation: "Drawdown measures loss from peak to lowest point."
    },
    {
      question: "Which is NOT a common quantitative strategy?",
      options: [
        "Astrology-based investing",
        "Mean reversion",
        "Momentum"
      ],
      correct: 0,
      explanation: "Astrology is not a quantitative method."
    },
    {
      question: "Which measure compares return to downside risk?",
      options: [
        "Sortino Ratio",
        "Sharpe Ratio",
        "Treynor Ratio"
      ],
      correct: 0,
      explanation: "Sortino uses downside deviation."
    }
  ],
math: [
{
  question: "If you invest $1,500 at 6% annual compound interest for 2 years, what is the final amount?",
  options: [
    "$1,683.60",
    "$1,689.00",
    "$1,692.00"
  ],
  correct: 0,
  explanation: "1500 × (1+0.06)^2 = $1,683.60"
},
{
  question: "A price increases from $80 to $100. What is the percentage increase?",
  options: [
    "25%",
    "20%",
    "22.5%"
  ],
  correct: 0,
  explanation: "(100-80)/80 = 0.25 = 25%"
},
{
  question: "What is 15% of 240?",
  options: [
    "36",
    "32",
    "34"
  ],
  correct: 0,
  explanation: "0.15 × 240 = 36"
},
{
  question: "If you deposit $2,000 earning 5% annual compound interest for 3 years, what will you have?",
  options: [
    "$2,315.25",
    "$2,315.00",
    "$2,310.00"
  ],
  correct: 0,
  explanation: "2000 × (1+0.05)^3 = $2,315.25"
},
{
  question: "Find the mean of: 4, 7, 10.",
  options: [
    "7",
    "6",
    "8"
  ],
  correct: 0,
  explanation: "(4+7+10)/3 = 7"
},
{
  question: "Find the variance of: 2, 4, 6.",
  options: [
    "2.67",
    "4",
    "3"
  ],
  correct: 0,
  explanation: "Mean=4; [(2-4)^2+(4-4)^2+(6-4)^2]/3=2.67"
},
{
  question: "If an amount triples in 15 years with annual compounding, what is the approximate annual rate?",
  options: [
    "7.6%",
    "6.3%",
    "8.1%"
  ],
  correct: 0,
  explanation: "r = (3)^(1/15)-1 ≈ 0.076"
},
{
  question: "Reduce the fraction 45/60.",
  options: [
    "3/4",
    "2/3",
    "4/5"
  ],
  correct: 0,
  explanation: "Divide by 15: 3/4"
},
{
  question: "Compute 2^5.",
  options: [
    "32",
    "16",
    "64"
  ],
  correct: 0,
  explanation: "2^5=32"
},
{
  question: "If $500 grows to $600, what is the percentage increase?",
  options: [
    "20%",
    "18%",
    "15%"
  ],
  correct: 0,
  explanation: "(600-500)/500=0.2=20%"
},
{
  question: "What is 75% of 160?",
  options: [
    "120",
    "115",
    "125"
  ],
  correct: 0,
  explanation: "0.75×160=120"
},
{
  question: "Compute the standard deviation of 5, 5, 5.",
  options: [
    "0",
    "5",
    "2.5"
  ],
  correct: 0,
  explanation: "All values equal: variance=0, SD=0"
},
{
  question: "If you invest $3,000 at 4% simple interest for 2 years, how much interest do you earn?",
  options: [
    "$240",
    "$250",
    "$260"
  ],
  correct: 0,
  explanation: "3000×0.04×2=240"
},
{
  question: "Divide 120 into the ratio 2:1.",
  options: [
    "80 and 40",
    "70 and 50",
    "60 and 60"
  ],
  correct: 0,
  explanation: "2 parts:1 part = 80 and 40"
},
{
  question: "Compute the median of 3, 8, 9.",
  options: [
    "8",
    "6",
    "9"
  ],
  correct: 0,
  explanation: "Middle value=8"
},
{
  question: "If $1,000 is invested at 8% compound interest for 2 years, what is the total amount?",
  options: [
    "$1,166.40",
    "$1,160.00",
    "$1,170.00"
  ],
  correct: 0,
  explanation: "1000×(1+0.08)^2=1,166.40"
},
{
  question: "What is 40% of 250?",
  options: [
    "100",
    "90",
    "110"
  ],
  correct: 0,
  explanation: "0.4×250=100"
},
{
  question: "Calculate (1.05)^3.",
  options: [
    "1.1576",
    "1.1500",
    "1.1620"
  ],
  correct: 0,
  explanation: "1.1576"
},
{
  question: "A price decreases from $200 to $150. What is the percentage decrease?",
  options: [
    "25%",
    "20%",
    "30%"
  ],
  correct: 0,
  explanation: "(200-150)/200=25%"
},
{
  question: "If a stock price rises 12% in a year, what factor do you multiply by?",
  options: [
    "1.12",
    "0.88",
    "1.20"
  ],
  correct: 0,
  explanation: "Increase=×1.12"
},
{
  question: "Compute the simple interest on $5,000 at 3% for 4 years.",
  options: [
    "$600",
    "$550",
    "$500"
  ],
  correct: 0,
  explanation: "5000×0.03×4=600"
},
{
  question: "If you invest $4,000 at 5% annual compound interest for 3 years, what is the amount?",
  options: [
    "$4,630.50",
    "$4,620.00",
    "$4,640.00"
  ],
  correct: 0,
  explanation: "4000×(1+0.05)^3=4,630.50"
},
{
  question: "Compute the variance of 1,2,3.",
  options: [
    "0.667",
    "1",
    "2"
  ],
  correct: 0,
  explanation: "Mean=2; [(1)^2+(0)^2+(1)^2]/3=0.667"
},
{
  question: "Find 20% of 450.",
  options: [
    "90",
    "85",
    "95"
  ],
  correct: 0,
  explanation: "0.2×450=90"
},
{
  question: "Compute the mean of 10,20,30.",
  options: [
    "20",
    "15",
    "25"
  ],
  correct: 0,
  explanation: "(10+20+30)/3=20"
}
,
{
  question: "If $2,500 is invested at 7% compound interest for 2 years, what is the total amount?",
  options: [
    "$2,862.25",
    "$2,850.00",
    "$2,870.00"
  ],
  correct: 0,
  explanation: "2,500×(1+0.07)^2=2,862.25"
},
{
  question: "Find 12% of 300.",
  options: [
    "36",
    "34",
    "38"
  ],
  correct: 0,
  explanation: "0.12×300=36"
},
{
  question: "Compute (1.03)^4.",
  options: [
    "1.1255",
    "1.1200",
    "1.1300"
  ],
  correct: 0,
  explanation: "1.03^4=1.1255"
},
{
  question: "A value increases from 400 to 460. What is the percentage increase?",
  options: [
    "15%",
    "12%",
    "18%"
  ],
  correct: 0,
  explanation: "(460-400)/400=15%"
},
{
  question: "If $6,000 earns 4% simple interest for 5 years, what is the interest?",
  options: [
    "$1,200",
    "$1,000",
    "$1,100"
  ],
  correct: 0,
  explanation: "6,000×0.04×5=1,200"
},
{
  question: "Find the median of 8,12,15.",
  options: [
    "12",
    "11",
    "13"
  ],
  correct: 0,
  explanation: "Middle value=12"
},
{
  question: "Compute the mean of 3,6,9,12.",
  options: [
    "7.5",
    "8",
    "7"
  ],
  correct: 0,
  explanation: "(3+6+9+12)/4=7.5"
},
{
  question: "If a price drops from $50 to $35, what is the percentage decrease?",
  options: [
    "30%",
    "25%",
    "20%"
  ],
  correct: 0,
  explanation: "(50-35)/50=30%"
},
{
  question: "Find 5% of 900.",
  options: [
    "45",
    "50",
    "40"
  ],
  correct: 0,
  explanation: "0.05×900=45"
},
{
  question: "Compute 3^4.",
  options: [
    "81",
    "64",
    "72"
  ],
  correct: 0,
  explanation: "3^4=81"
},
{
  question: "What is the variance of 4,4,4?",
  options: [
    "0",
    "4",
    "2"
  ],
  correct: 0,
  explanation: "All values equal: variance=0"
},
{
  question: "Find the mean of 7,14,21.",
  options: [
    "14",
    "12",
    "15"
  ],
  correct: 0,
  explanation: "(7+14+21)/3=14"
},
{
  question: "If $1,200 grows to $1,500, what is the percentage increase?",
  options: [
    "25%",
    "20%",
    "30%"
  ],
  correct: 0,
  explanation: "(1500-1200)/1200=25%"
},
{
  question: "What is 33% of 600?",
  options: [
    "198",
    "200",
    "190"
  ],
  correct: 0,
  explanation: "0.33×600=198"
},
{
  question: "Compute (1.06)^2.",
  options: [
    "1.1236",
    "1.1216",
    "1.1200"
  ],
  correct: 0,
  explanation: "1.06×1.06=1.1236"
},
{
  question: "Find the median of 2,5,8,11.",
  options: [
    "6.5",
    "7",
    "5.5"
  ],
  correct: 0,
  explanation: "(5+8)/2=6.5"
},
{
  question: "If $7,000 is invested at 3% simple interest for 4 years, what is the interest?",
  options: [
    "$840",
    "$820",
    "$880"
  ],
  correct: 0,
  explanation: "7,000×0.03×4=840"
},
{
  question: "A stock rises from $90 to $117. What is the percentage increase?",
  options: [
    "30%",
    "25%",
    "35%"
  ],
  correct: 0,
  explanation: "(117-90)/90=30%"
},
{
  question: "Compute 4^3.",
  options: [
    "64",
    "32",
    "16"
  ],
  correct: 0,
  explanation: "4×4×4=64"
},
{
  question: "Find 22% of 500.",
  options: [
    "110",
    "100",
    "120"
  ],
  correct: 0,
  explanation: "0.22×500=110"
},
{
  question: "If $2,000 grows to $2,600, what is the percentage increase?",
  options: [
    "30%",
    "25%",
    "20%"
  ],
  correct: 0,
  explanation: "(2600-2000)/2000=30%"
},
{
  question: "Compute the mean of 5,10,15,20.",
  options: [
    "12.5",
    "10",
    "15"
  ],
  correct: 0,
  explanation: "(5+10+15+20)/4=12.5"
},
{
  question: "Find the variance of 2,4,6,8.",
  options: [
    "5",
    "6.25",
    "4"
  ],
  correct: 0,
  explanation: "Mean=5; Variance=[(9+1+1+9)/4]=5"
},
{
  question: "Compute (1.04)^3.",
  options: [
    "1.1249",
    "1.1200",
    "1.1300"
  ],
  correct: 0,
  explanation: "1.04^3=1.1249"
},
{
  question: "What is 10% of 750?",
  options: [
    "75",
    "70",
    "80"
  ],
  correct: 0,
  explanation: "0.10×750=75"
}
,
{
  question: "If $5,000 earns 4% compound interest for 2 years, what is the total amount?",
  options: [
    "$5,408",
    "$5,400",
    "$5,420"
  ],
  correct: 0,
  explanation: "5,000×(1+0.04)^2=5,408"
},
{
  question: "Compute (1.02)^5.",
  options: [
    "1.1041",
    "1.1000",
    "1.1100"
  ],
  correct: 0,
  explanation: "1.02^5=1.1041"
},
{
  question: "Find 18% of 900.",
  options: [
    "162",
    "160",
    "165"
  ],
  correct: 0,
  explanation: "0.18×900=162"
},
{
  question: "A price increases from $300 to $390. What is the percentage increase?",
  options: [
    "30%",
    "25%",
    "35%"
  ],
  correct: 0,
  explanation: "(390-300)/300=30%"
},
{
  question: "Compute the mean of 12,15,18.",
  options: [
    "15",
    "14",
    "16"
  ],
  correct: 0,
  explanation: "(12+15+18)/3=15"
},
{
  question: "What is the variance of 1,3,5?",
  options: [
    "2.67",
    "4",
    "3"
  ],
  correct: 0,
  explanation: "Mean=3; Variance=[(4+0+4)/3]=2.67"
},
{
  question: "Find the median of 9,12,15,18.",
  options: [
    "13.5",
    "14",
    "12.5"
  ],
  correct: 0,
  explanation: "(12+15)/2=13.5"
},
{
  question: "Compute 5^2.",
  options: [
    "25",
    "20",
    "30"
  ],
  correct: 0,
  explanation: "5×5=25"
},
{
  question: "Find 40% of 1,200.",
  options: [
    "480",
    "500",
    "460"
  ],
  correct: 0,
  explanation: "0.4×1200=480"
},
{
  question: "If $2,500 grows to $3,000, what is the percentage increase?",
  options: [
    "20%",
    "25%",
    "15%"
  ],
  correct: 0,
  explanation: "(3,000-2,500)/2,500=20%"
},
{
  question: "Compute (1.07)^2.",
  options: [
    "1.1449",
    "1.1400",
    "1.1500"
  ],
  correct: 0,
  explanation: "1.07×1.07=1.1449"
},
{
  question: "A price drops from $500 to $400. What is the percentage decrease?",
  options: [
    "20%",
    "25%",
    "15%"
  ],
  correct: 0,
  explanation: "(500-400)/500=20%"
},
{
  question: "Compute the mean of 2,4,6,8,10.",
  options: [
    "6",
    "5",
    "7"
  ],
  correct: 0,
  explanation: "Sum=30; 30/5=6"
},
{
  question: "What is 8% of 750?",
  options: [
    "60",
    "58",
    "62"
  ],
  correct: 0,
  explanation: "0.08×750=60"
},
{
  question: "Compute (1.09)^3.",
  options: [
    "1.2950",
    "1.3000",
    "1.2850"
  ],
  correct: 0,
  explanation: "1.09^3=1.2950"
},
{
  question: "If $3,500 earns 5% simple interest for 3 years, what is the interest?",
  options: [
    "$525",
    "$500",
    "$550"
  ],
  correct: 0,
  explanation: "3,500×0.05×3=525"
},
{
  question: "A stock increases from $60 to $78. What is the percentage increase?",
  options: [
    "30%",
    "25%",
    "20%"
  ],
  correct: 0,
  explanation: "(78-60)/60=30%"
},
{
  question: "Find 27% of 300.",
  options: [
    "81",
    "85",
    "78"
  ],
  correct: 0,
  explanation: "0.27×300=81"
},
{
  question: "Compute (1.04)^4.",
  options: [
    "1.1699",
    "1.1600",
    "1.1750"
  ],
  correct: 0,
  explanation: "1.04^4=1.1699"
},
{
  question: "What is the variance of 3,3,3,3?",
  options: [
    "0",
    "3",
    "1"
  ],
  correct: 0,
  explanation: "All equal: variance=0"
},
{
  question: "Compute the median of 10,20,30,40.",
  options: [
    "25",
    "20",
    "30"
  ],
  correct: 0,
  explanation: "(20+30)/2=25"
},
{
  question: "Find 50% of 180.",
  options: [
    "90",
    "80",
    "100"
  ],
  correct: 0,
  explanation: "0.5×180=90"
},
{
  question: "Compute (1.05)^3.",
  options: [
    "1.1576",
    "1.1500",
    "1.1620"
  ],
  correct: 0,
  explanation: "1.05^3=1.1576"
},
{
  question: "If $8,000 grows to $10,000, what is the percentage increase?",
  options: [
    "25%",
    "20%",
    "30%"
  ],
  correct: 0,
  explanation: "(10,000-8,000)/8,000=25%"
},
{
  question: "Find 7% of 1,500.",
  options: [
    "105",
    "100",
    "110"
  ],
  correct: 0,
  explanation: "0.07×1,500=105"
}
,
{
  question: "Compute (1.08)^2.",
  options: [
    "1.1664",
    "1.1600",
    "1.1700"
  ],
  correct: 0,
  explanation: "1.08×1.08=1.1664"
},
{
  question: "What is 35% of 400?",
  options: [
    "140",
    "130",
    "150"
  ],
  correct: 0,
  explanation: "0.35×400=140"
},
{
  question: "If $6,000 grows to $7,200, what is the percentage increase?",
  options: [
    "20%",
    "25%",
    "30%"
  ],
  correct: 0,
  explanation: "(7,200-6,000)/6,000=20%"
},
{
  question: "Compute the mean of 5,15,25,35,45.",
  options: [
    "25",
    "24",
    "26"
  ],
  correct: 0,
  explanation: "Sum=125/5=25"
},
{
  question: "Find the variance of 2,4,6,8,10.",
  options: [
    "8",
    "10",
    "7.5"
  ],
  correct: 0,
  explanation: "Mean=6; Variance=[16+4+0+4+16]/5=8"
},
{
  question: "Compute (1.03)^3.",
  options: [
    "1.0927",
    "1.0900",
    "1.0950"
  ],
  correct: 0,
  explanation: "1.03^3=1.0927"
},
{
  question: "What is 15% of 1,200?",
  options: [
    "180",
    "175",
    "185"
  ],
  correct: 0,
  explanation: "0.15×1,200=180"
},
{
  question: "If $9,000 earns 6% simple interest for 2 years, what is the interest?",
  options: [
    "$1,080",
    "$1,000",
    "$1,200"
  ],
  correct: 0,
  explanation: "9,000×0.06×2=1,080"
},
{
  question: "A price decreases from $250 to $200. What is the percentage decrease?",
  options: [
    "20%",
    "25%",
    "15%"
  ],
  correct: 0,
  explanation: "(250-200)/250=20%"
},
{
  question: "Compute (1.02)^4.",
  options: [
    "1.0824",
    "1.0800",
    "1.0850"
  ],
  correct: 0,
  explanation: "1.02^4=1.0824"
},
{
  question: "Find 28% of 350.",
  options: [
    "98",
    "100",
    "95"
  ],
  correct: 0,
  explanation: "0.28×350=98"
},
{
  question: "Compute the mean of 20,40,60.",
  options: [
    "40",
    "35",
    "45"
  ],
  correct: 0,
  explanation: "(20+40+60)/3=40"
},
{
  question: "If $4,000 grows to $5,000, what is the percentage increase?",
  options: [
    "25%",
    "20%",
    "30%"
  ],
  correct: 0,
  explanation: "(5,000-4,000)/4,000=25%"
},
{
  question: "Compute 6^2.",
  options: [
    "36",
    "30",
    "42"
  ],
  correct: 0,
  explanation: "6×6=36"
},
{
  question: "Find 12% of 850.",
  options: [
    "102",
    "100",
    "105"
  ],
  correct: 0,
  explanation: "0.12×850=102"
},
{
  question: "Compute (1.05)^4.",
  options: [
    "1.2155",
    "1.2100",
    "1.2200"
  ],
  correct: 0,
  explanation: "1.05^4=1.2155"
},
{
  question: "A stock rises from $80 to $104. What is the percentage increase?",
  options: [
    "30%",
    "25%",
    "20%"
  ],
  correct: 0,
  explanation: "(104-80)/80=30%"
},
{
  question: "Find the variance of 5,5,5,5.",
  options: [
    "0",
    "5",
    "1"
  ],
  correct: 0,
  explanation: "All equal: variance=0"
},
{
  question: "Compute the median of 14,18,22.",
  options: [
    "18",
    "17",
    "20"
  ],
  correct: 0,
  explanation: "Middle value=18"
},
{
  question: "Find 9% of 1,100.",
  options: [
    "99",
    "100",
    "110"
  ],
  correct: 0,
  explanation: "0.09×1,100=99"
},
{
  question: "Compute (1.06)^3.",
  options: [
    "1.1910",
    "1.1900",
    "1.1850"
  ],
  correct: 0,
  explanation: "1.06^3=1.1910"
},
{
  question: "What is 25% of 640?",
  options: [
    "160",
    "150",
    "170"
  ],
  correct: 0,
  explanation: "0.25×640=160"
},
{
  question: "If $10,000 earns 5% simple interest for 1 year, what is the interest?",
  options: [
    "$500",
    "$550",
    "$600"
  ],
  correct: 0,
  explanation: "10,000×0.05×1=500"
},
{
  question: "Compute (1.03)^5.",
  options: [
    "1.1593",
    "1.1500",
    "1.1650"
  ],
  correct: 0,
  explanation: "1.03^5=1.1593"
},
{
  question: "Find 45% of 200.",
  options: [
    "90",
    "85",
    "95"
  ],
  correct: 0,
  explanation: "0.45×200=90"
}




]

 
};


let currentSection = "";
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let selectedQuestions = [];
let soundEnabled = true;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz(section) {
  currentSection = section;
  currentIndex = 0;
  score = 0;

  // Clone and shuffle the array
  const allQuestions = [...quizzes[currentSection]];
  shuffle(allQuestions);

  // Take first 10 (or less if there are fewer)
  selectedQuestions = allQuestions.slice(0, 10);

  document.querySelector(".section-selector").style.display = "none";
  const container = document.getElementById("quizContainer");
  container.style.display = "block";
  setTimeout(() => container.classList.add("visible"), 50);
  showQuestion();
}

function showQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  updateTimer();

  const quiz = selectedQuestions[currentIndex];
  document.getElementById("questionText").textContent = quiz.question;
  const answersContainer = document.getElementById("answersContainer");
  answersContainer.innerHTML = "";
  document.getElementById("feedback").textContent = "";
  updateScore();

  const optionsWithIndex = quiz.options.map((opt, idx) => ({
    text: opt,
    originalIndex: idx
  }));
  shuffle(optionsWithIndex);

  optionsWithIndex.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => checkAnswer(opt.originalIndex);
    answersContainer.appendChild(btn);
  });

  timer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timer);
      timeOut();
    }
  }, 1000);
}

function checkAnswer(selectedIdx) {
  clearInterval(timer);
  const quiz = selectedQuestions[currentIndex];
  const feedback = document.getElementById("feedback");
  if (selectedIdx === quiz.correct) {
    if (soundEnabled) document.getElementById("correctSound").play();
    feedback.textContent = "✅ Correct! " + quiz.explanation;
    feedback.style.color = "green";
    score++;
  } else {
    if (soundEnabled) document.getElementById("wrongSound").play();
    feedback.textContent = "❌ Incorrect. " + quiz.explanation;
    feedback.style.color = "red";
  }
  updateScore();
  disableButtons();
}

function timeOut() {
  if (soundEnabled) document.getElementById("wrongSound").play();
  const quiz = selectedQuestions[currentIndex];
  const feedback = document.getElementById("feedback");
  feedback.textContent = "⏰ Time's up! " + quiz.explanation;
  feedback.style.color = "orange";
  disableButtons();
}

function disableButtons() {
  Array.from(document.querySelectorAll(".answers button")).forEach(b => {
    b.disabled = true;
  });
}

function nextQuestion() {
  currentIndex++;
  const container = document.getElementById("quizContainer");
  container.classList.remove("visible");
  setTimeout(() => {
    if (currentIndex < selectedQuestions.length) {
      showQuestion();
      container.classList.add("visible");
    } else {
      showResults();
    }
  }, 500);
}

function updateScore() {
  document.getElementById("scoreDisplay").textContent = `Score: ${score}/${selectedQuestions.length}`;
}

function updateTimer() {
  document.getElementById("timerDisplay").textContent = `Time left: ${timeLeft}s`;
}

function showResults() {
  const percentage = ((score / selectedQuestions.length) * 100).toFixed(0);
  const container = document.getElementById("quizContainer");
  container.innerHTML = `<h2>Quiz Completed!</h2>
  <p>Your score: ${score}/${selectedQuestions.length} (${percentage}%)</p>
  <button onclick='location.reload()'>Restart</button>`;
  container.classList.add("visible");
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  document.getElementById("soundStatus").textContent = `Sound: ${soundEnabled ? "On" : "Off"}`;
}
