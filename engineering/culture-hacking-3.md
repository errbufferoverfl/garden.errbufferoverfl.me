---
title: "Culture Hacking III"
subtitle: "Identifying Cultural Threats and Risks"
author:
  - errbufferoverfl
date: 2024-12-03T16:20:09+10:30
date-modified: 2024-12-04T10:00:24+10:30
categories:
  - Ethical Hacking Practices
  - Organizational Change
  - Security and Behavior
draft: true
---

::: {.callout-note}

**03 December 2024**

This blog post has been migrated from **errbufferoverfl.me** to **garden.errbufferoverfl.me**. It has been updated with new insights, improved clarity, and new thoughts about the original content.

:::

Welcome back! 👋🏼 If you're new here or need a refresher, I recommend starting with the earlier posts in this series:

- [Culture Hacking I: A Guide to Transforming Organizations from Within](/engineering/culture-hacking-1)
- [Culture Hacking II: Why Does Culture Hacking Matter?](/engineering/culture-hacking-2)

This post builds on those foundational concepts to explore how to identify cultural threats and risks, which are often invisible but deeply impactful. Much like technical threat modelling helps us map out vulnerabilities in systems, cultural threat modelling reveals vulnerabilities in the social fabric of an organisation. These risks, if unaddressed, can undermine security, collaboration, and overall effectiveness.

## Why Cultural Threats Matter

Cultural threats might seem abstract at first, but they have tangible consequences. Just as a poorly configured server can expose an organisation to cyberattacks, a toxic culture or misaligned values can open the door to internal conflicts, poor decision-making, and ineffective security practices. Understanding these risks is critical to building a resilient organisation.

Cultural risks arise when values, attitudes, or practices within the organisation diverge from stated goals or expectations. A common example is when an organisation claims to value "collaboration," but its team structures and incentives encourage silos and competition instead. This misalignment creates friction, discourages cross-functional teamwork, and leads to inefficiencies that undermine the organisation’s overall goals. Similarly, a culture that rewards speed at the expense of quality can result in employees taking shortcuts, bypassing security checks, or cutting corners to meet deadlines. Over time, this behaviour can accumulate technical debt and leave the organisation vulnerable to security breaches or operational failures.

On the less obvious side, cultural threats can emerge from entrenched norms or biases that go unnoticed. For example, **"hero culture"** can develop when certain individuals are celebrated for "saving the day" during high-pressure situations. While this might seem like a positive reinforcement of hard work and dedication, it can inadvertently encourage a reactive rather than proactive approach to problems. Teams may start relying on a few "heroes" instead of building robust systems and processes to prevent issues in the first place.

Another uncommon but significant cultural threat is **"decision fatigue."** In organisations with overly complex or bureaucratic approval processes, employees might become overwhelmed by the volume of decisions they need to make daily. This can lead to critical decisions being rushed or delegated without proper oversight, increasing the likelihood of security oversights or poor strategic choices. Over time, decision fatigue can create an environment where employees feel disengaged or disempowered, further eroding the organisation’s ability to address risks effectively.

Another often-overlooked cultural risk stems from organisations that lean on the narrative of "being a family" to motivate employees. While it’s now more or less common knowledge that "being a family companies" can be problematic, this mindset persists in many organisations, often with damaging effects. While the intention may be to foster camaraderie and a sense of belonging, the reality is that it creates unique challenges. Unlike some families, businesses are conditional and transactional; they operate within the confines of budgets, performance metrics, and strategic objectives. Employees in such environments may feel pressured to overextend themselves, work beyond healthy boundaries, or sacrifice personal needs "for the good of the family."

This dynamic can create an environment ripe for burnout and resentment. Employees may feel guilted into taking on extra work, reluctant to say no, or fearful of being perceived as not being "team players." The "family" narrative can also blur professional boundaries, making it difficult for employees to advocate for themselves or push back against unreasonable demands. Worse, it can mask systemic issues, as employees hesitate to raise concerns or call out toxic behaviours for fear of disrupting the "family dynamic." Over time, this erodes trust, reduces morale, and increases turnover, ultimately harming the organisation’s stability and security posture.

More frequently in tech you're also seeing the hyper-growth trap. These organizations often prioritize rapid scaling and market capture, frequently at the expense of employee well-being and sustainable practices. Employees in hyper-growth environments are expected to "wear many hats" and work extended hours to meet aggressive goals. While this can foster innovation and agility in the short term, it creates a culture of perpetual urgency that burns out employees and depletes institutional knowledge as people leave.

They also often adopt a "work hard, play hard" philosophy, branding themselves as vibrant and rewarding places to work. Offeringenticing incentives like generous vacation policies, office perks, or team-building events. However, the reality often falls short. The relentless pace of work and long hours can make it difficult for employees to take full advantage of these benefits. Vacations may be deferred indefinitely due to pressing deadlines, and perks like free meals or game rooms can become symbols of overwork rather than relaxation, as they encourage employees to spend even more time in the office.

Hyper-growth environments also risk becoming chaotic, where processes, documentation, and oversight fail to keep pace with the company’s expansion. Rapid scaling often means onboarding new employees without adequate training, increasing the likelihood of security oversights. Similarly, decisions made in haste to maintain growth momentum can create vulnerabilities, such as deploying poorly tested systems, skipping critical risk assessments, or implementing quick fixes that accumulate technical debt.

The constant churn of employees in hyper-growth companies exacerbates these issues. As employees burn out and leave, institutional memory is lost, leaving the organisation in a continuous cycle of rebuilding. This turnover disrupts team cohesion, reduces morale, and weakens the organisation’s security culture. New hires may struggle to align with the company’s values or pick up the slack left by departed colleagues, further straining the system.

Despite growing awareness of the risks associated with these cultural threats, these practices remain prevalent because they are easy to romanticize. "Being a family" sounds supportive and inclusive, while hyper-growth promises excitement, innovation, and the allure of rapid success. Leaders may adopt these narratives to attract and retain talent, often underestimating the long-term costs to their teams and the organization as a whole.

Compounding the issue, many employees may initially buy into these narratives, believing they will foster a positive work environment or advance their careers. It’s only after experiencing the consequences—burnout, poor boundaries, or lack of support—that the cracks in these cultural frameworks become apparent. By the time these issues are recognized, the organization may already be grappling with high turnover, low morale, and significant operational challenges.

## Finding Cultural Threats and Risks

### Talk to the People Doing the Work

Unlike identifying technical threats, cultural threats aren't typically documented in design docs, threat models or risk assessments. It involves talking to people, observing behaviours (or lack there of), and reflecting on how your own biases might shape your perceptions.

The most valuable insights often come from people who are directly involved in "engineering"as they are going to have the firsthand experience with the organisation’s culture and its shortcomings, often feeling the immediate impact of gaps between policy and practice. When starting these conversations, it’s typically best to focus on engineers in mid and senior roles, particularly those working in high-risk or high-pressure groups with an average tenure at the company. This demographic tends to have been around long enough to see recurring problems and patterns, and they are likely to feel the brunt of cultural or operational misalignments.

For example, a mid-level engineer in a team responsible for critical infrastructure might describe the pressures of juggling tight deadlines with insufficient resources, revealing cracks in the organisation’s support structures. Similarly, senior engineers on high-pressure projects may identify systemic issues in leadership priorities or gaps in training that impact their ability to meet both security and operational goals.

While these individuals provide a strong starting point for identifying themes, it’s equally important to balance their perspectives with input from other groups. Employees with longer tenures may provide historical context, offering insight into how cultural or procedural changes have evolved over time. Conversely, newer hires can offer a fresh perspective, often highlighting gaps in onboarding or early challenges that may be less visible to longer-standing employees.

It’s also important to observe how people talk about the company. Overly positive accounts might signal someone who is consciously or unconsciously working to maintain the appearance of a strong company culture, potentially glossing over or ignoring underlying issues. This doesn’t mean their feedback isn’t valuable, but it’s crucial to probe deeper and seek specific examples to ensure a balanced view. On the other hand, overly negative responses may indicate someone who is looking to undermine morale or paint an exaggeratedly bleak picture of the organisation. While their perspective can provide insight into frustrations or systemic problems, it’s equally important to contextualise their feedback within broader trends and other employee input.

By paying attention to both the content of what people say and the tone in which they say it, you can better understand the underlying cultural dynamics. Ask open-ended questions that encourage honest and detailed feedback: Do they feel supported in their roles? What barriers prevent their productivity or well-being? Are security policies seen as enabling or obstructive? Combining these perspectives with an awareness of tone helps uncover hidden risks, recurring themes, and opportunities for improvement, ensuring a more accurate and actionable understanding of the organisation’s cultural health.

### Observe Behaviours and Interactions

An organization’s culture often reveals itself in the details of its daily activities. By observing how work is prioritized, meetings are conducted, and incidents—whether technical, operational, or interpersonal—are handled, you can uncover the "real" culture that operates beneath the surface. This day-to-day reality frequently diverges from the organization’s stated values, offering valuable insights into its unspoken norms.

Unspoken norms are the implicit behaviors and expectations that shape how employees perceive their roles and responsibilities. These norms are rarely documented or discussed openly, but they wield significant influence over an organization's functioning. Observing behaviors and interactions allows you to identify where these norms align with or contradict the values employees express in conversations.

For example, do employees feel safe raising concerns or proposing changes without fear of backlash? Are they willing to admit when they don’t know something or have made a mistake? These interactions provide critical clues about the level of psychological safety within the organization. Psychological safety—the belief that individuals can speak up, take risks, and share insights without fear of punishment or humiliation—is a cornerstone of healthy organizational culture. Without it, employees may avoid taking risks, sharing innovative ideas, or addressing critical vulnerabilities, which can lead to stagnation and unresolved issues.

The way teams decide what to work on can also be telling. Are their decisions guided by clear strategic priorities, or do they seem reactive, influenced by the loudest voice in the room or the most pressing crisis? Is security consistently factored into their planning, or is it frequently pushed aside in favor of speed or feature delivery? When work prioritization appears ad hoc or overly focused on short-term gains, it can signal a cultural misalignment where immediate results take precedence over long-term resilience.

Meetings are also microcosms of organisational culture. Pay attention to who speaks and how their contributions are received. Do team members feel comfortable voicing dissenting opinions or proposing new ideas? Or are meetings dominated by a few individuals, with others remaining silent out of fear of criticism or reprisal? An environment where people feel safe to speak up fosters innovation and collaboration, while one that stifles participation can lead to groupthink and missed opportunities for improvement.

You can also observe these patterns in Slack, especially if you can get your hands on Slack reporting of the number of messages sent publicly and privately.

The way teams handle incidents—whether they are technical failures, operational disruptions, or interpersonal conflicts—also provides critical insights into the organisation’s approach to accountability and learning. When something goes wrong, is the response focused on understanding the root cause and preventing future occurrences? Or does it devolve into finger-pointing and assigning blame? A culture that treats mistakes as opportunities for learning and growth is more likely to adapt and improve over time. In contrast, a punitive culture discourages openness and drives issues underground, where they can fester and escalate unnoticed.

It’s important to keep in mind the Hawthorne effect—people tend to alter their behavior when they know they are being observed. This can skew your understanding of the true culture and dynamics within the organization. To counteract this, approach your observations with discretion and sensitivity. Rather than overtly monitoring or questioning individuals, leverage existing relationships to gather feedback organically. This helps create a more authentic and accurate picture of the workplace environment, free from the influence of heightened awareness.

### Understand Values and Drift

An organization's stated values often serve as its aspirational identity—what it wants to stand for and how it wants to operate. However, the true measure of an organization's culture lies in the behaviors and practices observed in daily activities. Discrepancies between stated values and lived behaviors, often referred to as cultural drift, can indicate risks that may undermine the organization's goals.

For example, a company might prominently display "teamwork" as a core value, but if cross-functional collaboration is minimal or if groups operate in silos, this value is not being lived out. Similarly, if "transparency" is a stated priority but decisions are frequently made behind closed doors with little explanation, employees may grow distrustful or disengaged. Accountability, another common value, can also falter if poor performance or unethical behavior is ignored or inconsistently addressed.

The impact of cultural drift can be significant as it plays a leading role in eroding trust, creating confusion, and diminishing the credibility of leadership. Employees who see a disconnect between what is said and what is done may become disengaged or cynical, which can further entrench negative patterns. Moreover, this misalignment can lead to practical risks, such as a reluctance to report issues, lack of adherence to security protocols, or resistance to organizational changes.

To assess the alignment between values and behaviors, look closely at how values are operationalized. Are there policies and processes that reinforce these values? Are they upheld in critical moments, such as during a crisis or conflict? By identifying where values and behaviors diverge, you can pinpoint cultural risks and develop targeted strategies to bring the organization’s practices closer to its stated ideals.

### Examine Power Dynamics

Power dynamics within an organization also play a pivotal role in shaping its culture. Leaders and managers hold significant influence, not just through formal decision-making but also in how they interact with employees and model behavior. However, power often creates a distortion in perception—higher-ups may have a skewed view of the culture, shielded from day-to-day struggles by their position of privilege or distance from the operational level.

This distortion can lead to blind spots. Leaders may assume that processes are running smoothly because they don’t hear complaints, but this silence can often be a sign of suppressed voices rather than genuine contentment. Employees may hesitate to speak up about challenges or concerns for fear of retaliation, judgment, or being labeled as "not a team player." These dynamics can stifle innovation, create disengagement, and allow small issues to fester into significant problems.

Pay close attention to how managers and leaders engage with their teams. Do they create an environment where open dialogue is encouraged and valued? Or do their actions, even unintentionally, suppress honest communication? For instance, a manager who dismisses employee feedback or reacts defensively to constructive criticism may inadvertently discourage team members from raising important issues in the future.

Leadership behaviors during meetings and decision-making moments can also provide insights into power dynamics. Do leaders genuinely seek input, or do they dominate discussions? Is feedback actively solicited and acted upon, or does it feel performative? When leaders model humility, listen actively, and create space for diverse perspectives, they set the tone for a culture where power dynamics are balanced and inclusive.

Examining power dynamics also involves looking at the organization's response to failures and mistakes. Are leaders willing to take accountability for their own missteps, or do they shift blame downward? How leaders handle these moments can either build trust and psychological safety or reinforce a culture of fear and avoidance.

Addressing these dynamics is critical to reducing cultural risks. Leaders need to not only be equipped with tools and training to recognise their own biases and influence, but also held to account when they are acting in poor faith, or unchecked bias is called out. Regularly engaging in candid conversations with employees at all levels and establishing mechanisms for anonymous feedback can help bridge the gap between perception and reality.

## Modelling Cultural Threats

Just as technical threat models like STRIDE or PASTA help identify risks in software, cultural threat models help map vulnerabilities in organisational dynamics. One such framework is Political, Emotional, Psychological, Logistical (PEPL). Each dimension addresses a key aspect of cultural risk:

### Political Threats

Political risks often manifest in power struggles, favouritism, and territorialism, which can disrupt collaboration and hinder progress. Look out for:

- **Turf Wars:** Departments or teams competing for control over resources, processes, or decision-making authority, leading to silos and inefficiency.
- **Vendor or Technology Bias:** Loyalty to specific vendors or tools, often based on personal preferences or relationships, rather than objective analysis or organizational needs.
- **Token Collaboration:** Superficial cooperation between departments or teams that masks deeper mistrust or competition.
- **Hierarchical Gatekeeping:** Higher-ups restricting access to information or decision-making processes, creating bottlenecks and reducing transparency.

### Emotional Threats

Emotional vulnerabilities can significantly impact decision-making and risk management. Common emotional threats include:

- **Fear-Driven Decision-Making:** Employees avoiding innovative solutions or risk-taking due to fear of failure or punishment.
- **FUD (Fear, Uncertainty, Doubt):** External pressures, such as news of a competitor’s breach, creating panic and reactive decisions.
- **Shame Culture:** Mistakes are met with blame or humiliation, discouraging openness and learning.
- **Burnout Amplification:** High-pressure environments where emotional exhaustion is normalized and not addressed.

### Psychological Threats

Psychological threats emerge when strategies fail to account for human behavior and cognitive processes. Key risks include:

- **Overly Complex Processes:** Security procedures that are too complicated, leading to non-compliance or workarounds.
- **Exclusionary Practices:** Ignoring diverse perspectives, which limits creativity and increases the likelihood of blind spots.
- **Cognitive Overload:** Bombarding employees with too many responsibilities or conflicting priorities, reducing their ability to focus on security.
- **Implicit Bias:** Organizational strategies that unconsciously favor one group over another, creating barriers to inclusion and innovation.

### Logistical Threats

Logistical threats often arise when security initiatives are misaligned with existing systems or workflows. Watch for:

- **Incompatible Systems:** Security policies or tools that conflict with legacy systems, leading to gaps in enforcement or functionality.
- **Conflicting Goals:** Organizational objectives that prioritize speed, growth, or cost-cutting over robust security practices.
- **Resource Mismanagement:** Insufficient funding, staffing, or training to effectively implement security measures.
- **Operational Disruptions:** Poor integration of new security processes that interfere with daily workflows, creating frustration and resistance.

## How to Threat Model Using PEPL (Political, Emotional, Psychological, Logistical)

The PEPL framework is a structured approach to identifying, analysing, and mitigating cultural threats within an organisation. It draws from traditional threat modelling methodologies but applies them to the less tangible domain of organisational culture.

But how can you practically apply cultural threat modelling? Well, just like normal threat modelling it starts by:

### Define the Desired Outcome

Before diving into the specifics of threats, clarify the purpose of the threat model. What cultural outcomes are you trying to achieve? For example:

- Breaking down silos between departments.
- Ensuring employees feel safe reporting security incidents or mistakes.
- Reducing drift between stated values and everyday practices.

By defining the desired outcome, you establish a reference point to measure risks and identify areas for improvement.

### Map the Current Cultural Landscape

Gather qualitative and quantitative data about your organisation’s current culture. This can include:

- Talking to employees at different levels to understand their perspectives on the organisation’s culture.
- Watch how teams interact, prioritise tasks, and handle incidents.
- Review policy documents, internal communications, and meeting notes to see how values are articulated and practiced.

Look for patterns, contradictions, and areas of alignment or misalignment with the desired outcome.

### Identify Threats in Each PEPL Category

Break down cultural threats into four key dimensions: Political, Emotional, Psychological, and Logistical. Use the questions below as prompts to identify specific risks:

**Political Threats**

- Are there departmental silos or turf wars that hinder collaboration?
- Is there favouritism toward specific vendors, technologies, or practices?
- Are resources allocated equitably, or do some teams feel underfunded or unsupported?
- Do leadership decisions prioritise politics over practicality?

**Emotional Threats**

- Are employees motivated by fear, uncertainty, or doubt rather than strategic goals?
- Does the culture punish mistakes, discouraging transparency and accountability?
- Are high-pressure situations leading to burnout or emotional exhaustion?
- How does the organisation handle crises? Is there a tendency toward panic or blame?

**Psychological Threats**

- Are processes and policies intuitive and accessible, or overly complex and exclusionary?
- Are employees provided with the training and support they need to succeed?
- Does the organisation value diverse perspectives, or are biases creating blind spots?
- Are cognitive loads reasonable, or are employees overwhelmed by conflicting priorities?

**Logistical Threats**

- Are there incompatibilities between security initiatives and existing systems or workflows?
- Do organisational goals conflict with secure practices, such as prioritising speed over quality?
- Are there adequate resources (staffing, budget, tools) to support security efforts?
- How well are changes integrated into existing workflows? Do they disrupt or enhance operations?

### Prioritise Threats

Not all threats are equal. Use a prioritisation framework to assess which threats require immediate attention based on:

- **Impact:** How significantly does the threat undermine the desired outcome?
- **Likelihood:** How likely is it that this threat will materialise?
- **Feasibility:** How realistic is it to address this threat given current resources and constraints?

For example, a siloed team with high visibility into critical operations may represent a more urgent political threat than a minor vendor bias.

### Develop Mitigation Strategies

For each identified threat, outline potential mitigation strategies. Align these strategies with the desired cultural outcome to ensure they address the root cause. Some examples include:

**Political Threats**

- Facilitate cross-departmental projects to reduce silos.
- Implement transparent resource allocation frameworks.
- Ensure that vendor reviews and assessments include a declaration of conflicts of interest and are reviewed by at least one other person before procurement.

**Emotional Threats**

- Provide training on managing stress and uncertainty during crises.
- Encourage a "fail forward" mindset where mistakes are treated as learning opportunities.
- Develop clear, predictable playbooks for incident response.

**Psychological Threats**

- Simplify processes to reduce cognitive load and increase accessibility.
- Offer regular training tailored to diverse learning styles and skill levels.
- Incorporate diverse perspectives in decision-making to address blind spots.

**Logistical Threats**

- Ensure new systems and policies align with existing workflows and infrastructure.
- Automate repetitive tasks to reduce workload and free up time for strategic activities.
- Balance organisational goals to prioritise security without compromising efficiency.

### Make Small and Incremental Improvements

When implementing mitigation strategies, it’s important to focus on making small, incremental improvements rather than overwhelming the organisation with sweeping changes. While addressing cultural threats is critical, attempting to tackle too many policy, process, or cultural shifts at once can backfire. Rapid, large-scale changes can lead to what’s often referred to as "culture crashing," where employees feel overwhelmed, disengaged, or resistant to the changes being introduced.

To avoid this, approach cultural transformation as an iterative process:

- Identify low-hanging fruit—changes that are easy to implement and have a noticeable positive impact. For example, improving communication channels between teams or simplifying a single security process can create early wins that build momentum.
- Introduce changes to a small group or pilot team first. Gather feedback on the effectiveness of the change and its impact on day-to-day workflows. Use this data to refine your approach before scaling the change to the broader organisation.
- Focus on one or two high-impact areas at a time. For example, if psychological safety is a critical issue, prioritise initiatives that foster trust and open communication before tackling logistical inefficiencies.
- Regularly update the organisation on the progress of changes. Transparency helps manage expectations and builds confidence in the process.

By introducing changes incrementally, you allow the organisation to adapt naturally without causing unnecessary disruption. This approach also provides space to address unforeseen challenges or resistance, ensuring that cultural evolution is both sustainable and effective.

Remember, cultural shifts take time. Employees need opportunities to adjust to new expectations, processes, and norms. Rushing through multiple changes simultaneously risks confusion, resentment, and disengagement, ultimately undermining the very outcomes you’re working to achieve. Instead, view each small improvement as a building block for a stronger, more resilient culture that can support further transformation over time.

### Document and Share Findings

Finally, document your threat model and its outcomes. Share the findings with stakeholders to build alignment and ensure transparency. This fosters a collective understanding of the organisation’s cultural risks and the steps being taken to address them.

Threat modelling culture through the PEPL framework provides a way to understand and mitigate cultural risks that might otherwise remain hidden. By examining political, emotional, psychological, and logistical factors, organisations can identify vulnerabilities in their social and operational fabric, creating opportunities for targeted improvements.

The key to success lies in approaching cultural transformation as a deliberate, ongoing process. By defining clear outcomes, gathering diverse perspectives, prioritising threats, and introducing incremental changes, organisations can strengthen their culture without overwhelming their teams. Transparency and communication are essential to maintaining trust and fostering collaboration, ensuring that everyone feels invested in the organisation’s evolution.

Ultimately, a resilient culture is one where values are lived, not just stated, and where employees feel empowered to contribute to the organisation’s success. This foundation of trust, inclusivity, and shared responsibility is what enables organisation's to navigate challenges, seize opportunities, and thrive in an ever-changing landscape. By using the PEPL framework to guide cultural improvements, organisations can build not just better systems but also stronger, more cohesive teams.
