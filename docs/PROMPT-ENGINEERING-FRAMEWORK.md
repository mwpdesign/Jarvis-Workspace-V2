# PROJECT: Prompt Engineering Assistant

**Purpose**: Dedicated framework for crafting effective, structured prompts for all Clear Health Pass projects and workflows.

---

## Core Prompting Frameworks

### 1. RTF (Role Task Format)
```
Role: [Who Claude should be]
Task: [What needs to be done]
Format: [How to deliver the output]
```

**Best for**: Code generation, quick tasks  
**Why**: Clear role/output format critical

---

### 2. TAG (Task Action Goal)
```
Task: [What needs to be accomplished]
Action: [Specific steps to take]
Goal: [Desired end result/success criteria]
```

**Best for**: Process automation, strategic planning  
**Why**: Action steps and goal-orientation essential

---

### 3. RACEF (Role Action Content Examples Format)
```
Role: [Claude's expertise/perspective]
Action: [What Claude should do]
Content: [Specific subject matter/context]
Examples: [Sample outputs or reference materials]
Format: [Structure and delivery method]
```

**Best for**: Content creation, complex projects  
**Why**: Examples drive style/tone, comprehensive context needed

---

## Meta-Prompt Template

**When Michael says "I need help creating a prompt", use this structure:**

```markdown
I need help creating a prompt using [RTF/TAG/RACEF/combination] framework for:

PROJECT CONTEXT:
- Project name: [e.g., Woundcare App Feature]
- Domain: [Healthcare/Automation/Marketing/Web/etc.]
- Technical environment: [AWS/WordPress/n8n/Docker/etc.]

PROMPT PURPOSE:
- What I need Claude to help with: [specific task]
- Who will use this prompt: [me/team/repeated use]
- Expected interaction style: [one-shot/iterative/exploratory]

SUCCESS CRITERIA:
- Output format needed: [code/documentation/strategy/analysis]
- Level of detail: [high-level/step-by-step/comprehensive]
- Constraints: [budget/time/technical limitations]

ADDITIONAL CONTEXT:
[Any relevant background, previous attempts, specific requirements]
```

---

## Prompt Templates by Use Case

### For Development Tasks (RTF)

```
Role: You are a senior solutions architect experienced in [specific tech stack]

Task: [Specific development challenge - be concrete]

Format: Provide [code/architecture/both] with:
- Inline comments explaining key decisions
- Error handling considerations
- Testing recommendations
- Deployment notes for [AWS/Docker/etc.]
```

---

### For n8n Workflow Creation (TAG)

```
Task: Design an n8n workflow that [specific automation goal]

Action:
1. Map out the workflow nodes and connections
2. Specify triggers, data transformations, and conditions
3. Identify API integrations needed
4. Include error handling and retry logic

Goal: A production-ready workflow that [measurable outcome] while minimizing node complexity and API calls
```

---

### For Documentation/Training (RACEF)

```
Role: Technical writer specializing in healthcare software documentation

Action: Create [user guide/training video script/wiki page] for [specific feature]

Content: [Feature name and functionality description]

Examples: [Link to similar docs or describe style - e.g., "conversational like Slack docs" or "structured like AWS guides"]

Format:
- Written for [end-user/admin/developer] audience
- Include screenshots/diagrams callouts at [specific points]
- Structure: [numbered steps/narrative/reference format]
```

---

### For Marketing/Strategy (Combination)

```
Role: Marketing strategist with healthcare industry experience

Task: Develop [campaign/content/analysis] for [specific objective]

Action:
1. Analyze target audience: [demographic/pain points]
2. Propose [3-5] strategies with rationale
3. Prioritize by [ROI/effort/timeline]

Content: Focus on [Clear Health Pass positioning/specific product/market segment]

Examples: [Competitor approaches/previous campaigns/style references]

Format: Executive summary + detailed breakdown with metrics

Goal: Actionable plan implementable within [timeframe] using [available resources]
```

---

### For WordPress/DIVI Work (RTF)

```
Role: WordPress developer expert in DIVI theme customization

Task: [Create/modify/troubleshoot] [specific element] that [functionality description]

Format: Provide:
- DIVI module configuration steps OR custom CSS/PHP
- Mobile responsiveness considerations
- Performance impact assessment
- Rollback instructions if changes fail
```

---

## Quality Checklist for Generated Prompts

**Before using a prompt created by this framework, verify:**

- ✅ **Specificity**: No vague terms like "good" or "professional" - use measurable criteria
- ✅ **Context**: Includes relevant technical environment and constraints
- ✅ **Scope**: Clear boundaries on what's in/out of scope
- ✅ **Format**: Explicit output structure defined
- ✅ **Iteration**: Allows for follow-up questions or refinement
- ✅ **Actionability**: Claude can start immediately without needing clarification

---

## Advanced Techniques

### Chain-of-Thought Prompting
Add to any framework:
```
"Walk through your reasoning step-by-step before providing the solution"
```

### Few-Shot Learning
Include 2-3 examples of desired output style when asking for creative or nuanced work

### Constraint-Based
Explicitly state:
```
"Do not use [X technology/approach]. Must work within [specific limitation]."
```

### Iterative Refinement
Structure prompts for multi-turn conversations:
```
"First, propose 3 approaches. After I select one, provide detailed implementation."
```

---

## Framework Selection Guide

| Use Case | Best Framework | Why |
|----------|---------------|-----|
| **Code generation** | RTF | Clear role/output format critical |
| **Process automation** | TAG | Action steps need emphasis |
| **Content creation** | RACEF | Examples drive style/tone |
| **Complex projects** | RACEF or Combination | Needs comprehensive context |
| **Quick tasks** | RTF | Fastest, least overhead |
| **Strategic planning** | TAG | Goal-orientation essential |

---

## Project Maintenance

### Regular Updates
- Add new framework patterns as you discover effective combinations
- Document which frameworks work best for specific project types
- Save particularly effective prompts as templates

### Performance Tracking
Note which prompts required:
- **Minimal iteration** (excellent clarity) ✅
- **Multiple refinements** (needs improvement) ⚠️
- **Complete rewrites** (framework mismatch) ❌

---

## Usage Instructions for Jarvis

**When Michael says "I need help creating a prompt" or "help me with a prompt":**

1. **Ask clarifying questions** using the Meta-Prompt Template:
   - What's the project context?
   - What's the purpose?
   - What are success criteria?

2. **Select appropriate framework** based on use case (see Framework Selection Guide)

3. **Generate the prompt** using the selected template

4. **Apply quality checklist** to ensure completeness

5. **Present the prompt** to Michael for review/refinement

---

## Example Workflow

**Michael says**: "I need a prompt for creating an n8n workflow that monitors ZohoCRM for new leads"

**Jarvis responds**:
1. Identifies this as **process automation** → **TAG framework**
2. Asks: "What should the workflow do with new leads? What integrations are needed?"
3. Generates TAG-structured prompt with specific actions and measurable goals
4. Checks quality checklist
5. Presents completed prompt

---

**This framework ensures consistent, high-quality AI interactions across all Clear Health Pass projects.** 🎯
