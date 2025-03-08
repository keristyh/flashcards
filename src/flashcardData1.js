const flashcardData1 = [
  {
    "id": 1,
    "question": "What is the Rule of 72?",
    "answer": "The Rule of 72 is a shortcut to estimate the number of years required to double your money at a given annual interest rate. \n\nEX: At an 8% rate, 72/8 gives roughly 9 years to double.",
    "type": "easy"
  },
  {
    "id": 2,
    "question": "What is the difference between compound interest and simple interest?",
    "answer": "Simple interest is calculated only on the principal amount, while compound interest is calculated on the principal plus any interest that has already been earned, meaning you earn interest on interest.",
    "type": "easy"
  },
  {
    "id": 3,
    "question": "Define the concept of Time Value of Money.",
    "answer": "The Time Value of Money is the principle that a dollar today is worth more than a dollar in the future because it can be invested to earn a return, and due to factors like inflation and uncertainty.",
    "type": "easy"
  },
  {
    "id": 4,
    "question": "What is the primary purpose of creating a budget?",
    "answer": "A budget helps you track and allocate your income to fixed and variable expenses, ensures you save regularly, and aligns your spending with your financial goals.",
    "type": "easy"
  },
  {
    "id": 5,
    "question": "List three types of bank accounts and their main functions.",
    "answer": "Checking Account: Used to deposit and withdraw money, auto-deposit your paycheck, write checks, and perform electronic transfers.\n\nSavings Account (or High-Yield Savings): Used to deposit money and earn interest, with HYS accounts ensuring your cash earns at least 3.80%.\n\nInvestment Account: Used for buying and selling investments such as mutual funds, ETFs, stocks, bonds, and more.",
    "type": "easy"
  },
  {
    "id": 6,
    "question": "What are the five components of a credit score and their approximate weightings?",
    "answer": "Payment History: 35%\n\nCredit Utilization: 30%\n\nAverage Age of Credit: 15%\n\nMix of Credit: 10%\n\nRecent Inquiries: 10%",
    "type": "medium"
  },
  {
    "id": 7,
    "question": "How does credit utilization affect your credit score, and what can you do to improve it?",
    "answer": "Credit utilization is the percentage of your available credit that you’re using. A high utilization rate can lower your score (keep below 10%). To improve it, make mid-cycle payments, request a higher credit limit, or use your debit card for purchases instead.",
    "type": "medium"
  },
  {
    "id": 8,
    "question": "What are the benefits of using a high-yield savings account (HYSA) over a regular savings account?",
    "answer": "A high-yield savings account typically offers a significantly higher interest rate (e.g., around 3.80% or more) than a regular savings account, which allows your savings to grow faster while still maintaining liquidity and FDIC insurance.",
    "type": "medium"
  },
  {
    "id": 9,
    "question": "Compare the tax treatment of gains in a Roth IRA versus a taxable brokerage account when selling appreciated assets.",
    "answer": "In a Roth IRA, qualified withdrawals are tax-free, so any gains from selling appreciated assets are not taxed. In a taxable brokerage account, you must pay capital gains taxes on any profits realized from sales.",
    "type": "medium"
  },
  {
    "id": 10,
    "question": "What are the primary differences between bonds and stocks as investment vehicles?",
    "answer": "Bonds: Loans to an entity (government or corporation), offer fixed interest payments, generally lower risk and lower volatility, but with capped upside and potential risks like default or interest rate changes.\n\nStocks: Ownership in a company, offer potential for unlimited gains through capital appreciation and dividends, but are more volatile and carry a higher risk of loss.",
    "type": "medium"
  },
  {
    "id": 11,
    "question": "Explain how investment fees, such as expense ratios and advisor fees, can impact your portfolio over time.",
    "answer": "Fees reduce your overall returns by continuously taking a percentage of your investment value, which diminishes the power of compounding. For example, an expense ratio applied every year will lower the amount that remains invested, and over many years even a small fee can result in a significant reduction in portfolio growth.",
    "type": "hard"
  },
  {
    "id": 12,
    "question": "What are the advantages and disadvantages of target date funds compared to total market index funds?",
    "answer": "Target Date Fund: Automatically adjust asset allocation (glide path) to become more conservative as you approach retirement. Offer a “set-it-and-forget-it” approach suitable for long-term retirement savings. May have higher fees compared to index funds and may not be as tax-efficient in taxable accounts.\n\nTotal Market Index Fund: Provide consistent exposure to a broad market with lower fees, but require manual rebalancing to adjust risk over time.\n",
    "type": "hard"
  },
  {
    "id": 13,
    "question": "Using the conservative asset allocation rule (“100 minus your age”), what percentage of your portfolio should a 30-year-old invest in stocks? Explain your reasoning.",
    "answer": "Using the conservative rule, a 30-year-old should have approximately 70% of their portfolio in stocks (100 - 30 = 70). This rule suggests a higher allocation to stocks when you are younger, allowing for growth potential, and a gradual shift toward safer investments as you age.",
    "type": "hard"
  },
  {
    "id": 14,
    "question": "What is an IRA?",
    "answer": "Individually managed, with a contribution limit of around $7,000 for 2024. Offers more flexibility in terms of account choice and withdrawal options. Funding window is typically from January 1 to April 15 of the following year.",
    "type": "medium"
  },
  {
    "id": 15,
    "question": "What is a 401(k)?",
    "answer": "Employer-sponsored with higher contribution limits (e.g., $23,500 for 2025). Contributions are made throughout the year and are subject to employer rules. Often includes features like employer matching and loan options but with less investment",
    "type": "medium"
  },
  {
    "id": 16,
    "question": "Why should investors be cautious about mutual fund loads and high expense ratios?",
    "answer": "Mutual fund loads are one-time fees paid when you invest, reducing the initial amount that actually gets invested. High expense ratios continuously reduce your returns every year. Over time, these fees can significantly erode your portfolio’s growth, making it harder to achieve your long-term financial goals.",
    "type": "hard"
  },
  {
    "id": 17,
    "question": "What is a Consumer Price Index (CPI)?",
    "answer": "It's a measure of the purchasing power of a dollar across different years of the cost of a basket of goods (stocks, bonds, etc.).",
    "type": "easy"
  },
  {
    "id": 18,
    "question": "What is a SMART goal?",
    "answer": "Specific, measurable, achievable, relevant, time-bound",
    "type": "easy"
  },
  {
    "id": 19,
    "question": "What is the \"save more tomorrow\" method?",
    "answer": "Save what you can and increase as your future income increases. ",
    "type": "medium"
  },
  {
    "id": 20,
    "question": "What are some examples of High-Yield Savings?",
    "answer": "Discover, Marcus, Ally, Barclays, American Express, Vio Bank, Capital One\n",
    "type": "easy"
  },
  {
    "id": 21,
    "question": "Which component of your credit score as a percentage resets every billing cycle?",
    "answer": "credit utilization",
    "type": "medium"
  },
  {
    "id": 22,
    "question": "What is a hard pull?",
    "answer": "This is when a lender checks your credit and you give out your SSN. Only do it for a good reason, it can hurt your credit!",
    "type": "easy"
  },
  {
    "id": 23,
    "question": "What is a soft pull?",
    "answer": "This is when you check your own credit report and this doesn't affect your credit score. ",
    "type": "easy"
  },
  {
    "id": 24,
    "question": "What is a secured credit card?",
    "answer": "You put down a deposit and this is your limit. If you don't fully pay your balance each month, the bank deduct from your deposit. After 12-18 months, you can apply for a normal card, if you have managed your secured card well.",
    "type": "medium"
  },
  {
    "id": 25,
    "question": "What is the funding window for Roth IRA?",
    "answer": "January 1 - April 15",
    "type": "medium"
  },
  {
    "id": 26,
    "question": "What is the funding window for 401(k)?",
    "answer": "January 1 - December 31",
    "type": "medium"
  },
  {
    "id": 27,
    "question": "Why do we invest and not just save?",
    "answer": "Inflation tends to reduce the purchasing power of cash over time. Effective investing aims to generate returns that outpace inflation, so your money retains or even increases its real value.",
    "type": "medium"
  },
  {
    "id": 28,
    "question": "If you have a prior 401(k), what should you do with it?",
    "answer": "Leave it where it is or move in to your current 401(k).",
    "type": "medium"
  },
  {
    "id": 29,
    "question": "What are some index funds to avoid?",
    "answer": "Index funds that track particular industries, bet the market, or use leverage that is borrowed money.",
    "type": "hard"
  },
  {
    "id": 30,
    "question": "What is the Dow Jones?",
    "answer": "30 large stocks from publicly traded companies in the NYSE & NASDAQ with constituents changing based on their performance and other selection criteria.",
    "type": "easy"
  },
  {
    "id": 31,
    "question": "What are some differences between an Index fund and ETF?",
    "answer": "An ETF is a basket of securities that trades intra-day on exchanges, offering more trading flexibility and often better tax efficiency, whereas an index fund is a mutual fund that typically trades once per day at its net asset value.",
    "type": "medium"
  },
  {
    "id": 32,
    "question": "What are mutual fund loads?",
    "answer": "A load is a one-time fee paid every time you invest in the fund. Avoid these like the plague!!",
    "type": "medium"
  },
  {
    "id": 33,
    "question": "What are some good Robo-adviosrs?",
    "answer": "Betterment, Wealthfront, Fidelity Go, Ally Invest, Vanguard PAS",
    "type": "medium"
  },
  {
    "id": 34,
    "question": "What are some things to look out for when hiring a finanical planner or CPA?",
    "answer": "Fiduciary, Credentials, Expertise, Fees",
    "type": "medium"
  },
  {
    "id": 35,
    "question": "What is a robo-advisor?",
    "answer": "They are good at rebalancing, asset location, investing cash, and offering low-cost services (0.25%). They aren't that great at assessing risk, finanical planning, and talking you through a \"scary\" market. Be mindful of cash allocation.",
    "type": "easy"
  },
  {
    "id": 36,
    "question": "What is the basic budget formula?",
    "answer": "income - fixed expenses - variable expenses = leftover ",
    "type": "easy"
  }
]

export default flashcardData1;