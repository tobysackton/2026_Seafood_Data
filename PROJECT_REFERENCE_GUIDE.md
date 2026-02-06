# Project Reference Guide: NL vs NB Snow Crab Price Differential Analysis

**Project Completed:** February 6, 2026
**Client:** Ministry of Fisheries and Aquaculture, Province of Newfoundland
**Author:** John Sackton, Seafood Datasearch

---

## Project Summary

This consulting report analyzed why the price differential between Gulf (New Brunswick) and Newfoundland snow crab widened to record levels ($1.06/lb average, $1.50 peak in April 2025). The analysis identified two primary factors: a structural supply constraint (Gulf quota declining to 22% of combined production) and a temporal distortion (tariff-induced front-loading compressing purchases into April-July).

---

## Workflow: Research → Analysis → Thesis → Narrative → Charts

### Phase 1: Data Assembly
- Gathered 10 years of DFO quota data (Gulf and Newfoundland)
- Obtained Urner Barry wholesale price quotations by origin and size class
- Pulled US customs import data (monthly volumes by province)
- Obtained provincial export data to Japan from Global Trade Tracker

### Phase 2: Statistical Analysis
- Calculated Gulf supply share vs. price differential correlation (r = -0.80, p < 0.01)
- Built quadratic regression model (R² = 0.94)
- Identified threshold effect below 30% Gulf share
- Decomposed 2025 differential into structural (~$0.53) and temporal (~$0.97) components

### Phase 3: Hypothesis Development
- Primary thesis: Supply share drives differential; 2025 amplified by tariff panic
- Supporting hypotheses: Buyer loyalty patterns, size class differences, Japanese demand factor
- Tested each with available data; documented what could and couldn't be confirmed

### Phase 4: Narrative Writing
- Section-by-section delivery (not all at once)
- Claude drafted; John extensively rewrote in his voice
- Multiple revision cycles per section
- Final document reflects John's voice entirely

### Phase 5: Chart Development
- Interactive HTML charts using Chart.js
- Hosted on GitHub Pages at data.seafooddatasearch.com
- Charts created iteratively based on narrative needs
- 8 figures total in final report

---

## John Sackton's Writing Style

### Voice Characteristics
- **Direct and declarative** - states findings plainly, no hedging
- **First person plural** - "we found," "our analysis," "we tested"
- **Active voice** - "The data reveal..." not "It was revealed by the data..."
- **Investigative narrative** - shows the reasoning process, not just conclusions
- **Plain language with precision** - avoids jargon but uses exact numbers

### Structure Preferences
- **No bullet points in narrative sections** - prose paragraphs only
- **Logical progression** - builds arguments step by step
- **Concrete data points** - specific numbers, percentages, dollar amounts
- **Section headers are functional** - describe what the section does

### What to Avoid
- Flowery or academic language
- Excessive hedging or qualifications
- Repetition of earlier points
- Bullet lists in analytical narrative
- Overlong sentences with multiple clauses

### Example of John's Voice (from final report):
> "The share of Gulf crab compared to total snow crab has declined significantly. When Gulf crab represented half of Canadian snow crab production, buyers who wanted Gulf crab had supply options. The volume was sufficient to meet their demand. But as the Gulf's share contracted, the product transitioned from a commodity product to a specialty item."

---

## Collaboration Model

### How We Worked Together

1. **Claude researches and analyzes data** - searches files, runs calculations, identifies patterns
2. **Claude proposes outline/structure** - section by section, not all at once
3. **Claude drafts narrative sections** - attempting to match John's voice
4. **John rewrites extensively** - final text is entirely John's voice
5. **Claude creates supporting charts** - based on narrative needs
6. **John reviews and requests revisions** - specific feedback on what to change
7. **Iterate until complete**

### Key Principles
- **Section by section** - never deliver entire report at once
- **Show reasoning** - explain how conclusions were reached
- **Data first** - let the numbers drive the narrative
- **Extensive oversight** - John makes all final editorial decisions
- **Charts support narrative** - visuals created after text is drafted

---

## File Organization

```
NL_vs_NB_Crab_2026/
├── FINAL_REPORT_Analysis_of_Price_Differential_NL_NB_Crab.docx
├── PROJECT_REFERENCE_GUIDE.md (this file)
├── files/
│   ├── customs_ub_comparison.csv
│   └── [other data files]
├── document assembly/
│   └── claude outputs/
│       └── [working drafts]
└── retail analysis/
    └── [retailer methodology files]

Working Project Root:
├── japan_exports_by_province.csv
├── japan_us_gulf_comparison.csv
├── [chart HTML files - also pushed to GitHub]
```

---

## Charts Created

All hosted at: **https://data.seafooddatasearch.com/**

| Figure | File | Purpose |
|--------|------|---------|
| 1 | supply_differential_interactive.html | 10-year supply share vs differential |
| 2 | market_regimes_chart.html | Historical regime shifts |
| 3 | tariff_frontloading_chart.html | 2023 vs 2025 export timing |
| 4 | differential_decomposition_chart.html | Structural vs temporal breakdown |
| 5 | retailer_behavior_chart.html | Kroger vs C&S loyalty patterns |
| 6 | differential_and_imports_chart.html | Premium dissipation + cumulative imports |
| 7 | size_class_differential_chart.html | 5-8 oz vs 8 oz+ premiums |
| 8 | japan_gulf_exports_chart.html | Japanese provincial sourcing |

### Chart Development Process
1. Identify data needed to support narrative point
2. Assemble/calculate data from available sources
3. Build interactive HTML with Chart.js
4. Push to GitHub Pages repository
5. Provide URL for embedding in document

---

## Key Analytical Findings

### Statistical Results
- Correlation r = -0.80 (supply share vs differential)
- Quadratic regression R² = 0.94
- Threshold effect at ~30% Gulf share
- Structural premium at 22% share: ~$0.53/lb
- Temporal premium in April 2025: ~$0.97/lb

### Market Insights
- Gulf transitioned from commodity to specialty product
- Japanese buyers source 83-95% from Gulf, pay 20-30% premium
- Retailer behavior varies: Kroger price-sensitive (r=+0.90), C&S loyal (r=-0.35)
- 8 oz+ premiums more persistent than 5-8 oz (quality/channel factors)

---

## Lessons for Future Projects

1. **Start with data exploration** - understand what's available before hypothesizing
2. **Build narrative section by section** - allows for iteration and course correction
3. **Create charts after narrative** - visuals should support story, not drive it
4. **Document negative findings** - what you tested but couldn't confirm matters
5. **Acknowledge data limitations** - builds credibility
6. **Use proxies carefully** - explain why they work (NB = Gulf, state imports = retailer)
7. **Separate structural from temporal** - distinguishes persistent vs. one-time factors

---

## Template for Future Reports

### Suggested Section Structure
1. **Executive Summary** - key findings, 1-2 pages max
2. **Introduction** - problem statement, methodology overview
3. **Core Analysis** - the main argument with supporting data
4. **Decomposition/Deeper Dives** - breaking down the finding
5. **Data Limitations** - what you couldn't measure
6. **Implications and Outlook** - what it means going forward

### Deliverables Checklist
- [ ] Final report (.docx)
- [ ] Interactive charts (HTML, hosted)
- [ ] Supporting data files (.csv)
- [ ] Project reference guide

---

*This reference guide created February 2026 for use in future Seafood Datasearch consulting projects.*
