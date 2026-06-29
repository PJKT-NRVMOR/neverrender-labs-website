**Architecting Custom AI Workflows: A Comprehensive Analysis of Gemini Gems and Super Gems Ecosystems**

The progression of generative artificial intelligence has transitioned from ephemeral, ad-hoc prompting to the deployment of persistent, programmatic cognitive agents.\[1, 2, 3\] Within the Google ecosystem, this architectural evolution is realized through Gemini Gems: specialized, custom configurations of the underlying model designed to encapsulate specific personas, instructions, default tools, and knowledge bases.\[2, 4\] Rather than requiring manual inputs of operational context, stylistic preferences, and reference materials during every session—a highly inefficient process that imposes an administrative burden on users—Gems store these variables in a persistent state.\[2, 3\] This design facilitates instant, context-aware collaboration from the moment a session begins.\[5\]  
Unlike global custom instructions, which uniformly alter model behavior across all interactions, Gems exist as decoupled, narrow micro-agents.\[2\] This separation allows users to maintain diverse agents, such as a formal business communication drafter alongside a punchy social caption generator, without risk of behavioral cross-contamination.\[2\] While competing paradigms like OpenAI's Custom GPTs focus heavily on public, searchable marketplaces, Gemini Gems prioritize controlled, private, and organizational deployment models.\[6\] This approach emphasizes data privacy, administrative oversight, and secure integration within enterprise systems.\[6\]  
Technical Architecture and Platform Compatibility  
The deployment and execution of Gemini Gems are governed by strict platform permissions, account configurations, and licensing models.\[7, 8\] While custom agents must be created and edited through the web-based Gemini interface, the finalized configurations automatically sync across mobile applications (Android and iOS) and the Google Workspace side panel, establishing a unified interface for end users.\[9, 10\]  
The table below delineates the structural differences in agent accessibility, operational boundaries, and model capabilities across various licensing models:

| Technical Parameter | Standard Plan | AI Plus Plan | AI Pro Plan | AI Ultra Plan | Enterprise / EDU Workspace |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Creation Interface | Gemini Web App \[9\] | Gemini Web App \[9\] | Gemini Web App \[9\] | Gemini Web App \[9\] | Gemini Web App \[9\] |
| Mobile & Side Panel Execution | Supported \[9, 10\] | Supported \[9\] | Supported \[9\] | Supported \[9\] | Supported \[9, 11\] |
| Standard Context Window | 32k Tokens \[12\] | 128k Tokens \[12\] | 1M Tokens \[12\] | 1M Tokens \[12\] | Up to 1M Tokens \[12, 13\] |
| Core Model Base | Gemini Flash-Lite \[12\] | Gemini Flash \[12\] | Gemini Pro \[12\] | Gemini Pro \[12\] | Gemini Pro / Ultra \[12\] |
| Data Protection Standards | Subject to Model Training \[14, 15\] | Subject to Model Training \[15\] | Subject to Model Training \[15\] | Subject to Model Training \[15\] | Enterprise-Grade (No Training) \[8, 16\] |
| Minimum User Age | 13 Years \[7, 17\] | 13 Years \[7\] | 13 Years \[7\] | 13 Years \[7\] | 18 Years \[1, 8\] |
| Maximum Output Limit | Standard Token Caps \[18\] | Standard Token Caps \[18\] | 64k Tokens \[18\] | 64k Tokens \[18\] | 64k Tokens \[18\] |

For personal accounts, the minimum age requirement is set to 13 years (or the applicable age in the user's country).\[7, 17\] For enterprise and educational domains, Google Workspace administrators are responsible for assigning licenses exclusively to users who are 18 years of age or older.\[1, 8\] Model access and execution speeds are closely tied to these tier assignments.\[12\] Users on premium subscriptions can access advanced models and toggle between different thinking levels.\[12, 19\]  
Standard thinking offers rapid responses for everyday tasks.\[12\] Extended thinking leverages the capabilities of advanced models to reason over prompts for a longer duration before generating output.\[12, 19\] Deep think, exclusive to Ultra subscriptions, provides parallel reasoning over complex mathematical and technical prompts.\[12\]  
System Creation, Optimization, and Lifecycle Management  
The process of creating a custom Gem begins by expanding the Gemini web application sidebar, navigating to the Gems manager, and selecting the option to create a new Gem.\[2, 7\] The creator is prompted to define three primary textual variables: a descriptive title, an optional user-facing description, and system instructions.\[3, 5, 20\]

1. Naming & Description: Establish the Gem's identity and core purpose.  
2. Instruction Generation: Utilize manual drafting or the auto-rewrite tool for detailed system prompts.  
3. Knowledge Ingestion: Upload files from local devices or integrate directly with Google Drive.  
4. Testing & Refinement: Use the real-time preview panel to iterate on prompt behavior.  
5. Commit Configuration: Save the finalized settings to register the Gem.

To streamline instruction writing, the creation interface includes an automated prompt expansion tool.\[3, 9\] By drafting a brief, two-sentence description of the agent's core goal and clicking the rewrite button, the system utilizes Gemini's reasoning capabilities to expand the input into a detailed, structured system prompt.\[1, 3, 9\] This expanded prompt automatically incorporates operational goals, behavioral rules, and formatting guidelines.\[3\]

To refine agent performance, creators can enter test prompts into a real-time preview panel on the right side of the editor.\[1, 21\] This panel executes the current instruction draft, allowing for immediate observation and iterative tuning.\[7, 21\] It is critical to note that using the preview panel does not automatically commit changes.\[1, 21\] Creators must click the Save button to register the agent in the central database.\[1, 21\]  
Once registered, Gems are managed through a lifecycle interface where they can be edited, deleted, or pinned to the top of the sidebar for quick access.\[7, 9\] In terms of execution boundaries, Gems are currently restricted from running inside the voice-driven Gemini Live interface, limiting them to text- and file-based multimodal workspaces.\[7, 9\]  
Google's Premade Gems Suite  
For users seeking immediate utility, the platform provides several pre-configured agents built by Google.\[1, 22\] These premade Gems are preloaded with optimized system instructions, allowing users to interact with them immediately or duplicate them to customize their behavior.\[1, 22\]  
The table below catalogs the core suite of premade Google Gems and their corresponding default roles:

| Premade Gem | Core Functional Application | Customization Options | Operational Guardrails & Limitations |
| :---- | :---- | :---- | :---- |
| Brainstormer | Creative idea generation, gift planning, event naming, and theme concept mapping.\[4, 22\] | Can be copied and customized with target demographic metrics or regional event constraints.\[22, 23\] | Prompts the user with clarifying questions to narrow down broad requests.\[22, 23\] |
| Career Guide | Professional coaching, roadmap planning, and resume auditing.\[4, 24\] | Allows integration of personal skill lists, employment history, and targeted job listings.\[22, 24\] | Focuses on structured, actionable milestones rather than generic advice.\[4, 21\] |
| Writing Editor | Line-by-line editorial feedback, style guide compliance, and grammar analysis.\[4, 24\] | Supports customization with specific style parameters such as AP, Chicago, or MLA guidelines.\[22, 24\] | Categorizes feedback into structured sections like syntax, spelling, and tone.\[4, 21\] |
| Coding Partner | Code writing, logic debugging, syntax explanation, and multi-file project planning.\[4\] | Can be customized for specific programming languages and architectural patterns.\[21, 25\] | Confines conversations strictly to programming; redirects off-topic queries.\[21\] |
| Learning Coach | Conceptual tutoring, step-by-step math instruction, and academic scaffolding.\[1, 4\] | Can be optimized for specific academic levels, curricula, or course activities.\[21, 26\] | Strictly refuses to provide direct answers, guiding users to discover solutions.\[26\] Currently lacks language learning support.\[7, 9\] |
| Productivity Planner | Task organization, schedule management, and daily briefing compilation.\[24\] | Can be connected to personal calendars and task tracking tables.\[24, 27\] | Generates action-item lists and structures daily priorities.\[24, 27\] |

Knowledge Base Engineering and Ingestion Channels  
To ground agents in proprietary data, creators can construct a dedicated knowledge base.\[2, 10\] This integration uses Gemini's context window to retrieve relevant information during chats, bypassing the need to upload files manually in every session.\[2, 11\]  
The table below details the available data ingestion pathways, limits, and technical parameters:

| Ingestion Pathway | Supported Formats | Maximum Payload / File Limits | Dynamic Update Capability |
| :---- | :---- | :---- | :---- |
| Direct Device Upload | PDFs, Word Docs, text files, and standard data formats.\[7, 21\] | Up to 10 files; maximum of 100 MB per file.\[11, 28\] | Static. Requires manual deletion and re-upload when source files change.\[7, 21\] |
| Google Drive Integration | Sheets, Google Docs, Slides, and related cloud files.\[7, 21\] | Up to 10 files; maximum of 100 MB per file.\[11, 28\] | Dynamic. Pulls the latest version from Google Drive in real time.\[7, 11\] |
| NotebookLM Integration | Compiled research notebooks.\[7, 9\] | Up to 10 notebooks; each notebook supports up to 50 curated sources.\[29\] | Semi-Dynamic. Synchronizes notebook resources directly into the model's workspace.\[29\] |
| GitHub Repo / Code Folders | Code directories and structured software projects.\[28\] | 1 folder; up to 5,000 files with a maximum size of 100 MB.\[28\] | Static. Imports the codebase structure into the active session.\[28\] |
| Compressed ZIP Files | Multi-file archives.\[28\] | Maximum size of 100 MB; capped at 10 files per archive.\[28\] | Static. Video and audio files are strictly prohibited within uploaded archives.\[28\] |

To use Google Drive integration, users must enable Gemini Apps Activity and connect the Google Workspace extension.\[7, 9, 21\] Once configured, the Gem references the live version of a document, automatically reflecting any external edits.\[7, 9\]  
The NotebookLM pathway offers a significant scalability advantage.\[29\] While direct file uploads are capped at 10 files, linking to NotebookLM allows an agent to reference up to 500 individual sources across 10 notebooks, effectively turning the agent's context window into a comprehensive research library.\[29\] To manage citation noise, creators can select a setting to disable knowledge citations, preventing inline source citations from appearing in chat responses.\[7, 21\]  
Instruction Architecture and the Four Pillars Framework  
The quality of an agent's output is directly determined by its system instructions.\[26\] Vague instructions, such as directing an agent to "write good client emails," result in inconsistent and generic responses.\[2\] To ensure reliable behavior, professional prompt engineers structure instructions around the Four Pillars framework, separating each section with clear Markdown headings to help the model parse different types of rules.\[2, 30\]

### The Four Pillars of System Instructions

* Persona: Defines role, tone, style, and humor.  
* Task: Specifies core goals, required outputs, and execution steps.  
* Context: Outlines audience, situational constraints, and safety guardrails.  
* Format: Structures tables, Markdown, and code block outputs.

* Persona: Defines the agent's identity, professional role, and tone.\[30, 31\] For example, a senior systems architect should adopt an analytical and precise tone, using professional language while avoiding robotic filler phrasing.\[30, 32\] Tone rules can specify subtle traits, such as using warm but professional phrasing, applying measured dry humor to complex tasks, or offering reassuring guidance when addressing user errors.\[30\]  
* Task: Specifies the precise duties the agent must perform.\[30, 31\] This section outlines what the agent should analyze, generate, or rewrite, and defines how it should process inputs.\[26, 30, 32\]  
* Context: Establishes the background, situational constraints, and guardrails.\[26, 30, 31\] This includes details about the target audience, such as undergraduate students or enterprise clients, and outlines what the agent must not do.\[26\] Guardrails might include refusing to provide direct answers, avoiding jargon without definitions, or maintaining neutrality when handling sensitive topics.\[26\]  
* Format: Outlines the structure and visual layout of the final output.\[26, 30\] This section directs the model to present findings in specific formats, such as structured Markdown tables, numbered lists, step-by-step explanations, or clean, copy-pasteable code blocks.\[30, 32\]

The table below provides structured instruction templates for core custom roles, demonstrating how the Four Pillars are applied in practice:

| Custom Role | Persona & Tone Specification \[30\] | Operational Task Parameters \[30\] | Target Context & Guardrails \[26\] | Output Formatting Protocol \[30\] |
| :---- | :---- | :---- | :---- | :---- |
| E-Commerce SEO Optimizer | Act as an expert SEO strategist and copywriter. Tone is persuasive, clear, and professional.\[30, 32\] | Audit provided product descriptions and generate optimized title tags and meta descriptions.\[30\] | Focus exclusively on high-conversion keywords. Never fabricate search volumes or invent product features.\[32\] | Present recommendations in a three-column table: Original Element, Optimized Version, and Strategic Justification.\[30\] |
| System Security Auditor | Act as a senior security engineer. Tone is neutral, highly technical, and direct.\[30, 32\] | Analyze uploaded code blocks for vulnerabilities, identifying memory leaks and injection points.\[30\] | Prioritize evidence-based reasoning. If security implications are uncertain, state the limitation clearly.\[32\] | Divide output into: Vulnerability Overview, Severity Rating, Remediation Steps, and Refactored Code Block.\[30\] |
| Academic Socratic Tutor | Act as a patient, encouraging university teaching assistant. Tone is supportive and academic.\[21, 26\] | Guide students through complex conceptual problems in chemistry and physics.\[21, 26\] | Never provide direct answers or completed homework. Scaffold concepts, asking one question at a time.\[26\] | Limit responses to three sentences. Use simple analogies and prompt the student to explain steps in their own words.\[21, 26\] |

Enterprise Governance, Collaborative Sharing, and Security Policies  
Deploying custom agents in professional environments requires balancing collaboration with data security and compliance.\[6, 8\] Historically, sharing Gems was highly restricted.\[33\] In early 2025, Gems were isolated to individual accounts within Workspace domains.\[33\] Sharing an agent required manually copy-pasting its system instructions and file attachments into external documents so other users could recreate the agent on their own accounts.\[33\] This manual process was inefficient and prone to configuration errors.\[33\]  
To resolve these limitations, Google introduced a unified, Drive-style sharing model in late 2025.\[6\] This update allows users to share custom Gems directly with specific colleagues or generate public links within their organization, using access controls to manage collaboration \[6, 7\]:

* Viewers: Viewers can run the Gem and inspect its system instructions and attached knowledge base files.\[7\]  
* Editors: Editors have full permission to modify instructions, add or delete files from the knowledge base, change access permissions, or delete the Gem entirely.\[7\]

Because shared Gems are stored within Google Drive, their distribution is governed by the organization's global Drive permissions.\[34\] If an administrator prohibits external file sharing, users are blocked from sharing Gems with external accounts.\[34\] Gems shared with a user do not automatically appear in their personal Gem manager, preventing clutter and ensuring intentional selection.\[9\]

### Data Privacy and Review Standards

* Consumer Accounts (Activity On): Subject to human review and model training. History is saved.  
* Consumer Accounts (Activity Off): No model training; 72-hour retention for safety monitoring.  
* Enterprise Accounts: Zero model training, enterprise-grade protections, and administrative sharing controls.

Data privacy policies differ significantly between consumer and enterprise accounts.\[14, 16\] Under personal accounts, conversations are saved in Gemini Apps Activity.\[14\] If this setting is enabled, chats and uploaded files may be reviewed by human annotators and used to train future generative models.\[14, 15\] Even if a user disables activity history to prevent model training, Google retains conversations for 72 hours for safety monitoring, and previously human-reviewed data is kept for up to three years in an anonymized format.\[14, 35\]  
For organizations using Google Workspace with Gemini, enterprise-grade data protections apply automatically.\[8, 16\] Customer data stays within the organization's domain and is never human-reviewed or used to train models outside the tenant.\[8, 16\] Administrators can also apply Information Rights Management (IRM) and Data Loss Prevention (DLP) policies.\[8, 16\]  
These policies prevent the model from retrieving sensitive documents if a user lacks direct permission to access them, and automatically block the ingestion of files labeled with restricted classification tags.\[8, 16\] Additionally, before executing a task, Gemini's security layers screen files and web links for threats like hidden malicious URLs or prompt injection attacks.\[8\]  
The table below outlines how conversations built around Gems can be shared, along with their associated restrictions:

| Sharing Mechanism | Exportable Elements | Accessibility & Limits | Continuation Restrictions |
| :---- | :---- | :---- | :---- |
| Share Conversation | Transports the active chat history, excluding the Gem's underlying instructions.\[7\] | Generates a public link accessible to anyone with authorization.\[7, 33\] | Links are read-only. Recipients cannot continue the conversation on their own accounts.\[7\] |
| Share Conversation & Instructions | Transports the chat history along with the Gem's system instructions and name.\[7\] | Exposes the custom instructions to the recipient.\[7\] | Recipients can read the instructions but cannot continue the chat session.\[7\] |
| Direct Gem Sharing | Shares the complete Gem configuration, including instructions and device files.\[6, 7\] | Shares configurations as Viewer or Editor.\[7\] | Recipients can use the Gem as a persistent, interactive agent.\[6, 7\] |

The Next Horizon: Super Gems and Opal Automation Engines  
The Gemini ecosystem advanced significantly with the release of the Super Gems framework, which integrated Google's experimental Opal builder directly into the Gems Manager.\[36, 37, 38\] While standard Gems operate as text-based chat interfaces, Super Gems act as visual, interactive mini-applications.\[5, 38\]  
The visual interface replaces standard chat prompts with structured forms containing drop-down menus, check boxes, and action buttons.\[5\] For example, a travel planning agent can display form fields for destination, duration, and budget, allowing users to receive tailored plans without typing complex prompts.\[5\]

### Super Gems Architecture (Opal Framework)

* Form Generator: Custom input fields, drop-downs, and buttons replace text prompts.  
* Conditional Logic: If/Then branches, loops, and repetition arrays manage complex flows.  
* Workspace Pipelines: Native reading and writing to Google Docs, Sheets, and Drive.  
* Interactive Deployment: Standalone public links allow one-click access to no-code applications.

The underlying architecture uses the Opal framework to build and execute multi-step workflows.\[36, 37, 38\] The builder automatically generates the required workflow steps, system instructions, and logic flows based on a simple description of the desired application.\[38\]  
Super Gems also support conditional logic, loops, and native integrations with Workspace applications, allowing users to automate complex, multi-step tasks \[37\]:

* Conditional Logic (If/Then): Enables the agent to evaluate inputs and choose different actions based on specific criteria.\[37\]  
* Loops & Repetition: Automates repetitive tasks, such as scanning every row in a spreadsheet and performing a specific action for each entry.\[37\]  
* Workspace Pipelines: Establishes direct connections to read and write data across Google Docs, Sheets, and Drive, allowing users to build self-contained workflows.\[36, 37\]

As an example, a user can build a sales ingestion agent that reads incoming customer emails, extracts lead details, writes them to a specific Google Sheet, and automatically creates a formatted follow-up draft in Google Docs.\[36, 37\]  
Once completed, these agents can be shared using public links.\[37, 38\] This approach bypasses traditional Drive permission requirements, allowing anyone with the link to open and run the Super Gem as an interactive web application.\[37, 38\]  
The table below compares standard Gems and the updated Super Gems framework:

| Dimension | Standard Gems | Super Gems (Opal Framework) |
| :---- | :---- | :---- |
| Interface Style | Traditional conversational chat window.\[5\] | Dynamic visual forms, input fields, and action buttons.\[5\] |
| Workflow Complexity | Single-step prompting based on pre-defined instructions.\[2, 5\] | Multi-step workflows using conditional logic, loops, and branches.\[37, 38\] |
| Data Integration | Static file uploads and dynamic Drive document retrieval.\[7, 11\] | Native data pipelines that write to and read from Sheets and Docs.\[36, 37\] |
| Sharing Model | Managed via Google Drive sharing and user permissions.\[6, 34\] | Deployable as a public, standalone web app via shareable links.\[37, 38\] |
| Execution Engine | Conversational model processing.\[2, 5\] | Visual workflow builder with advanced code generation.\[37, 38\] |

Strategic Synthesis and Actionable Implementations  
Integrating Gemini Gems and Super Gems into an organization's workflow requires a structured approach to development, scaling, and governance.\[2, 4\] To ensure high-quality outputs, development should focus on narrow, single-purpose agents rather than broad, multi-role configurations.\[2, 30\] An agent designed specifically to audit PHP security vulnerabilities will perform significantly better than a generic agent that attempts to handle coding, copywriting, and project management simultaneously.\[2, 30\]  
Organizations should begin by mapping out highly repetitive, document-heavy tasks.\[4, 10\] Teams can use Google's premade Gems as a starting point, modifying their system instructions to align with internal brand voice, target demographics, and formatting preferences.\[2, 22\]  
Once baseline prompts are established, teams should build a centralized, secure knowledge base.\[2, 10\] Linking custom agents directly to live Google Drive folders—such as brand style guides, technical documentation, or legal templates—ensures that the agents always reference the most up-to-date information.\[7, 11\]  
For advanced automations, organizations can leverage Super Gems and the Opal framework to transition from conversational assistants to automated workflows.\[36, 37\] Using the visual workflow builder, teams can automate data collection and processing across Docs, Sheets, and Drive, reducing manual effort and minimizing errors.\[36, 37\]  
Finally, administrators must establish clear governance and security policies.\[16, 34\] Managing Gem permissions through the Google Admin Console ensures compliance with data protection standards, while enterprise-grade licensing protects sensitive data and keeps proprietary information securely within the organization's domain.\[8, 16, 34\]  
\--------------------------------------------------------------------------------

1. How to Use Google Gems \- The New School, [https://services.newschool.edu/TDClient/32/Portal/KB/ArticleDet?ID=1364](https://services.newschool.edu/TDClient/32/Portal/KB/ArticleDet?ID=1364)  
2. How to Build a Custom Gemini Gem: Your Reusable AI Assistant in 10 Minutes, [https://www.ud.com.hk/en/blogs/insight/article/2026-06-04-gemini-gems-custom-assistant](https://www.ud.com.hk/en/blogs/insight/article/2026-06-04-gemini-gems-custom-assistant)  
3. How to use Gemini Gems \- Tutorial for Beginners \- Simpletivity, [https://www.simpletivity.com/videos/how-to-use-gemini-gems---tutorial-for-beginners](https://www.simpletivity.com/videos/how-to-use-gemini-gems---tutorial-for-beginners)  
4. 12+ Gemini Gems Examples and Templates for Everyday Use | AI SuperHub Blog, [https://www.aisuperhub.io/blog/google-gemini-gems-examples-and-templates-ideas-for-everyday-use](https://www.aisuperhub.io/blog/google-gemini-gems-examples-and-templates-ideas-for-everyday-use)  
5. Building Custom Gems in Gemini \- Free Video Tutorial \- Graduate School USA, [https://www.graduateschool.edu/learn/ai/building-custom-gemini-gems](https://www.graduateschool.edu/learn/ai/building-custom-gemini-gems)  
6. Sharing your Gemini Gems custom AI is easier than you think \- ComputerUser, [https://computeruser.com/sharing-your-gemini-gems-custom-ai-is-easier-than-you-think](https://computeruser.com/sharing-your-gemini-gems-custom-ai-is-easier-than-you-think)  
7. Use Gems in Gemini Apps \- Computer \- Gemini Apps Help, [https://support.google.com/gemini/answer/15146780?hl=en\&co=GENIE.Platform%3DDesktop](https://support.google.com/gemini/answer/15146780?hl=en&co=GENIE.Platform%3DDesktop)  
8. Google Workspace with Gemini FAQ for Business | Generative AI, [https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/gemini-for-google-workspace-faq-business](https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/gemini-for-google-workspace-faq-business)  
9. Use Gems in Gemini Apps \- Android \- Google Help, [https://support.google.com/gemini/answer/15146780?hl=en\&co=GENIE.Platform%3DAndroid](https://support.google.com/gemini/answer/15146780?hl=en&co=GENIE.Platform%3DAndroid)  
10. Gemini Gems: Your Personal AI Assistants for Business \- AI Academy, [https://www.ai-academy.com/blog/gemini-gems-your-personal-ai-assistants-for-business](https://www.ai-academy.com/blog/gemini-gems-your-personal-ai-assistants-for-business)  
11. New features in Gemini to deepen usage for organizations | Google Workspace Blog, [https://workspace.google.com/blog/product-announcements/new-gemini-gems-deeper-knowledge-and-business-context](https://workspace.google.com/blog/product-announcements/new-gemini-gems-deeper-knowledge-and-business-context)  
12. Gemini Apps limits & upgrades for Google AI subscribers, [https://support.google.com/gemini/answer/16275805?hl=en](https://support.google.com/gemini/answer/16275805?hl=en)  
13. New Gemini app features, available to try at no cost, [https://blog.google/products-and-platforms/products/gemini/new-gemini-app-features-march-2025/](https://blog.google/products-and-platforms/products/gemini/new-gemini-app-features-march-2025/)  
14. Google Gemini Privacy Policy Explained \- Cape, [https://www.cape.co/blog/google-gemini-privacy-policy](https://www.cape.co/blog/google-gemini-privacy-policy)  
15. Even with a paid Gemini Ultra/Pro subscription, is there really no privacy for my data? : r/GeminiAI \- Reddit, [https://www.reddit.com/r/GeminiAI/comments/1t5va0g/even\_with\_a\_paid\_gemini\_ultrapro\_subscription\_is/](https://www.reddit.com/r/GeminiAI/comments/1t5va0g/even_with_a_paid_gemini_ultrapro_subscription_is/)  
16. Generative AI in Google Workspace Privacy Hub, [https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub](https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub)  
17. Get started with Gems in Gemini Apps \- Google Help, [https://support.google.com/gemini/answer/15236321?hl=en](https://support.google.com/gemini/answer/15236321?hl=en)  
18. Information limit for Custom Gems \- Gemini Apps Community \- Google Help, [https://support.google.com/gemini/thread/322389047/information-limit-for-custom-gems?hl=en](https://support.google.com/gemini/thread/322389047/information-limit-for-custom-gems?hl=en)  
19. Google Just Gave Gemini Free Users a Nice Upgrade (Extended Thinking) \- YouTube, [https://www.youtube.com/watch?v=sMw3ngdRE\_k](https://www.youtube.com/watch?v=sMw3ngdRE_k)  
20. New Gem \- Google Gemini, [https://gemini.google.com/gems/create](https://gemini.google.com/gems/create)  
21. Tips for creating custom Gems \- Gemini Apps Help \- Google Help, [https://support.google.com/gemini/answer/15235603?hl=en](https://support.google.com/gemini/answer/15235603?hl=en)  
22. Get a quick start with premade Gems \- Computer \- Gemini Apps Help, [https://support.google.com/gemini/answer/15235907?hl=en\&co=GENIE.Platform%3DDesktop](https://support.google.com/gemini/answer/15235907?hl=en&co=GENIE.Platform%3DDesktop)  
23. Get a quick start with premade Gems \- Android \- Gemini Apps Help, [https://support.google.com/gemini/answer/15235907?hl=en\&co=GENIE.Platform%3DAndroid](https://support.google.com/gemini/answer/15235907?hl=en&co=GENIE.Platform%3DAndroid)  
24. AI Helpful Tips: Understanding Google Gems \- Office of OneIT, [https://oneit.charlotte.edu/2025/11/05/ai-helpful-tips-understanding-google-gems/](https://oneit.charlotte.edu/2025/11/05/ai-helpful-tips-understanding-google-gems/)  
25. Supported languages, IDEs, and interfaces | Gemini for Google Cloud, [https://docs.cloud.google.com/gemini/docs/codeassist/supported-languages](https://docs.cloud.google.com/gemini/docs/codeassist/supported-languages)  
26. Creating Gemini Gems (Chatbots) to Support Teaching, [https://ctl.wustl.edu/creating-gemini-gems-chatbots-to-support-teaching/](https://ctl.wustl.edu/creating-gemini-gems-chatbots-to-support-teaching/)  
27. Google Workspace with Gemini | Generative AI, [https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/google-workspace-with-gemini](https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/google-workspace-with-gemini)  
28. Upload & analyze files in Gemini Apps \- Android \- Google Help, [https://support.google.com/gemini/answer/14903178?hl=en\&co=GENIE.Platform%3DAndroid](https://support.google.com/gemini/answer/14903178?hl=en&co=GENIE.Platform%3DAndroid)  
29. Bypass Gemini's 10-File Limit: How to Prompt 500+ Sources at Once\! \- YouTube, [https://www.youtube.com/watch?v=JaVQODICrhw](https://www.youtube.com/watch?v=JaVQODICrhw)  
30. What are the best practices to write instructions for a Gemini Gem? : r/GeminiAI \- Reddit, [https://www.reddit.com/r/GeminiAI/comments/1qdhen8/what\_are\_the\_best\_practices\_to\_write\_instructions/](https://www.reddit.com/r/GeminiAI/comments/1qdhen8/what_are_the_best_practices_to_write_instructions/)  
31. Untitled, [https://support.google.com/gemini/answer/15235603?hl=en\#:\~:text=a%20new%20Gem-,Write%20great%20Gem%20instructions,the%20Gem%20personalize%20Gemini's%20responses.\&text=Tell%20your%20Gem%20what%20role%20to%20play%20and%20how%20to%20respond.\&text=Tell%20the%20Gem%20what%20you%20want%20Gemini%20to%20do%20or%20create.\&text=Provide%20as%20much%20background%20as%20possible.](https://support.google.com/gemini/answer/15235603?hl=en#:~:text=a%20new%20Gem-,Write%20great%20Gem%20instructions,the%20Gem%20personalize%20Gemini's%20responses.&text=Tell%20your%20Gem%20what%20role%20to%20play%20and%20how%20to%20respond.&text=Tell%20the%20Gem%20what%20you%20want%20Gemini%20to%20do%20or%20create.&text=Provide%20as%20much%20background%20as%20possible.)  
32. What are some instructions I should have for Gemini ? : r/GoogleGeminiAI \- Reddit, [https://www.reddit.com/r/GoogleGeminiAI/comments/1ocjqwt/what\_are\_some\_instructions\_i\_should\_have\_for/](https://www.reddit.com/r/GoogleGeminiAI/comments/1ocjqwt/what_are_some_instructions_i_should_have_for/)  
33. Sharing Gems \- Gemini Apps Community \- Google Help, [https://support.google.com/gemini/thread/337663496/sharing-gems?hl=en](https://support.google.com/gemini/thread/337663496/sharing-gems?hl=en)  
34. Turn Gem sharing on or off | Gemini App \- Google Workspace Help, [https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/turn-gem-sharing-on-or-off](https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/turn-gem-sharing-on-or-off)  
35. Gemini Apps Privacy Hub \- Google Help, [https://support.google.com/gemini/answer/13594961?hl=en-GB](https://support.google.com/gemini/answer/13594961?hl=en-GB)  
36. Google Super Gems: The Update That Lets You Build AI Apps Without Coding, [https://juliangoldie.com/google-super-gems-ai-update/](https://juliangoldie.com/google-super-gems-ai-update/)  
37. Google Super Gems Update: Build Custom AI Apps With Zero Code : r/AISEOInsider, [https://www.reddit.com/r/AISEOInsider/comments/1pygjcp/google\_super\_gems\_update\_build\_custom\_ai\_apps/](https://www.reddit.com/r/AISEOInsider/comments/1pygjcp/google_super_gems_update_build_custom_ai_apps/)  
38. Google started rolling out SuperGEMs from Opal ... \- TestingCatalog, [https://www.testingcatalog.com/google-started-rolling-out-super-gems-from-opal-inside-gemini/](https://www.testingcatalog.com/google-started-rolling-out-super-gems-from-opal-inside-gemini/)

