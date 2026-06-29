# The Google Flow Architecture

## An Analysis of Generative Media Studios, Enterprise Orchestration, and Asynchronous Frameworks

The evolution of modern software architecture is increasingly defined by the migration from static, linear processes to dynamic, state-aware execution pipelines. Within the Google ecosystem, the designation of "Flow" represents a multi-tiered structural philosophy spanning creative media generation, enterprise automation, conversational interface design, high-throughput data processing, and front-end state management. This report details the underlying mechanics, operational trade-offs, and structural convergence of these technologies.

# Generative Media Pipelines: Google Flow AI Creative Studio and Flow Music

The creative production landscape has shifted from frame-by-frame editing to semantic, multi-modal collaboration.\[1\] The cornerstone of this evolution is the Google Flow AI Creative Studio, which acts as a unified hub for generative video, image, and audio workflows across more than 140 countries.\[1, 2\]

## Multimodal Foundation Models

The system architecture of Google Flow is powered by several proprietary foundation models designed to work together during production \[3\]:

* Gemini Omni and Omni Flash: This multimodal network is designed for precise, conversational video editing.\[2, 3\] Omni Flash processes inputs across different modalities, enabling creators to combine real-world video uploads with generated assets.\[2\] Notably, the model improves character consistency—a common issue in earlier generative video systems—by preserving visual identity and vocal characteristics across sequential scenes.\[1, 2\]  
* Nano Banana and Nano Banana 2: These models manage vector alignment, typography rendering, and spatial image editing.\[3, 4\] Nano Banana 2 features a style-transfer mechanism that applies the texture, color palette, or composition of a reference image to a target canvas in seconds.\[4\] It also supports dynamic canvas resizing, allowing the model to adapt aspect ratios without cropping key visual subjects.\[4\]  
* Veo 3 and Veo 3.1: Serving as the underlying video synthesis engine, Veo 3.1 is optimized for physics simulations, spatial realism, and adherence to complex text prompts.\[2, 3, 5\]

## The Google Flow Agent

The Google Flow Agent acts as an orchestrator that manages multi-step production tasks.\[1\] Rather than executing single, disjointed prompts, the Agent maintains a persistent memory of the project across sessions.\[1\]  
The Agent develops storyboards, drafts dialogue, and generates multiple variations of a single shot simultaneously.\[1\] It also handles batch editing, applying changes (such as modifying lighting or costume details) across all project files at once.\[1, 2\] Finally, the Agent organizes, groups, and renames generated media assets within project folders based on semantic context.\[1, 2\]

## Mobile Workflows and Production Constraints

While the desktop web platform remains the primary interface for complex tasks, Google’s mobile applications provide on-the-go creation capabilities.\[2, 6\] The Flow app for Android and iOS utilizes mobile-optimized prompts that allow creators to configure parameters such as camera angles, lighting conditions, and composition styles directly from their devices.\[2, 5, 6\]  
Creators can tag specific project assets using an @ syntax to guide the model's generation.\[5, 6\] For example, entering @CaptainZoro walking through a futuristic city directs the model to use a specific character asset as a consistent visual reference.\[5\] Similarly, typing @me inserts a user's pre-rendered personal avatar into the scene.\[5\]  
However, early deployment of the beta mobile application has revealed several production constraints \[6\]:

* Character Drift: Users report that the image-to-video pipeline sometimes struggles to preserve identity across generations, causing changes in facial structure, clothing styles, and body composition.\[6\]  
* Mobile Interface Stability: Resource-intensive file uploads and asset tagging can sometimes trigger app crashes on mobile devices.\[6\]  
* Resource and Regional Restrictions: The conversational Agent is currently excluded from the mobile client, and video upload editing is restricted in certain jurisdictions, including the European Economic Area (EEA), the United Kingdom, and several US states due to local regulatory frameworks.\[4, 6\]

## Audio Synthesis and Lyria 3 Pro

For audio generation, Google Flow Music utilizes the Lyria 3 Pro model, allowing musicians and producers to generate tracks up to three minutes long.\[2, 4\] The platform supports granular timeline editing, enabling creators to highlight a specific section of a song to rewrite lyrics, translate vocals, or restyle beats without affecting the rest of the track.\[2\]  
Additionally, a "Song Covers" feature allows users to transform the overall genre of an entire playlist (such as converting a track to a "lo-fi study" aesthetic) while preserving the original melody, timing, and structural composition.\[2\] To support copyright compliance and provenance tracking, all synthesized audio is watermarked at the sample level using Google's imperceptible SynthID technology.\[4\]  
The table below outlines the resource levels and credit allocations across Google's subscription tiers \[3, 4\]:

| Feature Metric | Free Plan \[3\] | Google AI Plus \[3, 4\] | Google AI Pro \[4\] | Google AI Ultra \[4\] |
| :---- | :---- | :---- | :---- | :---- |
| Monthly Subscription Cost | $0.00 \[3\] | $19.99 \[3\] | $19.99 \[4\] | $99.99 \[4\] |
| Included Storage Limit | 15 GB | 400 GB \[3, 4\] | 5 TB \[4\] | 20 TB to 30 TB \[4\] |
| Google Flow Credits | 50 daily \[3\] | 200 monthly \[3\] | 1,000 monthly \[4\] | 25,000 monthly \[4\] |
| Flow Music Credits | None | None | 10,000 monthly \[4\] | 30,000 monthly \[4\] |
| Maximum Audio Track Length | 30 seconds \[4\] | 30 seconds \[4\] | 3 minutes \[4\] | 3 minutes \[4\] |
| Google Cloud Developer Credits | None | None | $10 monthly \[4\] | $40 to $100 monthly \[4\] |
| Smart Home Bundle Integration | None | None | Standard Plan ($10 value) \[4\] | Advanced Plan ($20 value) \[4\] |

# Enterprise Orchestration: Google Workspace Studio and Cloud Workflows

At the enterprise level, Google's automation strategies use declarative frameworks to connect disparate business systems.\[7\] This is achieved through two distinct orchestration systems: Google Workspace Studio (geared toward productivity apps) and Google Cloud Workflows (designed for developer services).\[7, 8, 9\]

## Google Workspace Studio

Formerly known as Google Workspace Flows, Workspace Studio serves as a no-code automation engine that allows non-technical employees to build agentic workflows using natural language prompts.\[7\]  
The system uses a split-plane security and intelligence model \[7\]:

* Gemini for Workspace: Operates as a localized productivity assistant, helping users draft content, summarize threads, and format spreadsheets.\[7\]  
* Gemini Enterprise: Functions as the compliance and security layer.\[7\] It connects Workspace applications with corporate databases and enforces data-loss prevention rules, ensuring automated agents operate within company security boundaries.\[7\]

Workspace Studio workflows consist of three components: a Starter trigger (e.g., receiving an invoice in Gmail), a Reasoning phase where Gemini analyzes the data against company guidelines, and an Action output (e.g., drafting a response or creating a task in Asana).\[7\]  
To maintain security and operational reliability, Workspace Studio enforces several system limits \[10\]:

* Age and Account Restrictions: To comply with safety standards, AI features are unavailable to users under 18 or those accessing the platform via school-managed accounts.\[10\]  
* Input Constraints: Prompts must be submitted in English, and referenced links are limited to files stored in Google Drive; links to Google Calendar events or Google Meet sessions are not supported.\[10\]  
* No External Custom Integrations: Workspace Studio agents cannot directly trigger external add-ons or unverified API endpoints, requiring developers to configure those connections manually.\[10\]

## Google Cloud Workflows

For system integration and backend services, Google Cloud Workflows provides a serverless execution engine for developer APIs.\[8\] Unlike Workspace Studio, which is designed for end-user productivity, Cloud Workflows executes stateful processes defined in JSON or YAML.\[8\]  
The engine features Spanner-backed state checkpointing, allowing workflows to pause, wait for external callbacks, and retry failed operations for up to one year.\[8\] Running in sandboxed environments without code dependencies, Cloud Workflows integrates with Eventarc to trigger executions based on system events, such as when a file is uploaded to Cloud Storage or a message is published to Pub/Sub.\[8\]

# Dialogflow ES vs. Dialogflow CX: Conversational State Engines

For customer-facing conversational interfaces, Google's Dialogflow platform utilizes two different architectural models: Dialogflow Essentials (ES) and Dialogflow Customer Experience (CX).\[11, 12\] Originally founded in 2010 as API.AI and acquired by Google in 2016, Dialogflow has evolved from a simple intent-matching service into an enterprise-grade conversation engine.\[12, 13\]

## Architectural Paradigms and State Management

The core difference between the two editions lies in how they manage conversational state \[13, 14\]:  
Dialogflow ES (Intent-Based Context Mapping):  
Dialogflow CX (Explicit Finite State Machine):  
Dialogflow ES operates on a flat, intent-based model.\[13, 15\] Conversation flow is managed through input and output Contexts.\[15, 16\] Because intents are evaluated independently, state tracking must be managed either within the developer's application code or through complex nested contexts.\[15, 16\] While suitable for simple, linear interactions or prototyping, ES can become difficult to maintain when managing complex conversations that extend beyond 10 turns.\[13, 15\]  
Dialogflow CX uses an explicit state-machine design, mapping conversations to three core components \[13, 17\]:

* Flows: Independent sub-agents representing high-level conversational topics (e.g., billing, support, or catalog navigation).\[13, 18, 19\] This structure allows multiple development teams to work on separate parts of the agent simultaneously.\[15, 19\]  
* Pages: The individual states within a flow, representing a point where the agent gathers specific input or provides information.\[13, 17\]  
* Routes: The transition logic guiding state changes.\[13, 17\] Routes can be triggered by matched intents, conditional evaluations of parameters, or system events.\[13, 16, 17\]

This state-machine architecture enables features like multi-flow parallelism, which allows the agent to temporarily pause a support interaction to answer an off-topic question (such as business hours) and then return the user to their exact place in the original flow.\[15\]

## Conversational Input Validation and Parameters

Capturing structured parameters (e.g., names, dates, quantities) is managed differently across the two versions.\[18, 19, 20\] Dialogflow ES utilizes intent-level slot filling, where parameters are marked as mandatory and the agent continues to prompt the user until all values are collected.\[17\] However, this model lacks built-in options to limit maximum prompt retries, occasionally leading to repetitive loops if the agent fails to understand the user's input.\[16, 19\]  
Dialogflow CX manages parameter collection via page-level Forms.\[16, 17\] Each parameter in a Form has its own validation rules, fallback prompts, and error-handling paths.\[16, 17\] This separation of intent matching from parameter collection allows developers to reuse validation parameters across different pages.\[16, 17\]  
Additionally, Dialogflow CX introduces a Response Queue that concatenates multiple responses during a single conversational turn, reducing the need for custom webhook code.\[17\] Unlike Dialogflow ES, which requires external webhooks for all dynamic replies, Dialogflow CX supports configuration-based static responses, calling webhooks only when dynamic data is needed.\[17\]

## Platform Limitations and Cost Dynamics

When designing conversational architectures, developers must weigh the distinct trade-offs of each system \[15\]:

* Model Lock-In: Dialogflow CX’s generative features are tied to Google's Gemini models, which can be a constraint for teams that prefer to avoid model lock-in.\[12\]  
* Voice Integration: Dialogflow CX handles telephony through Google Cloud's Contact Center AI (CCAI) as a separate integration, which can add setup complexity.\[12\]  
* Language Support: Dialogflow ES supports 32 languages, while Dialogflow CX has more limited multilingual capabilities, with some features requiring English-only configurations.\[19\]

The table below compares the pricing and capabilities of Dialogflow ES and Dialogflow CX \[15, 19\]:

| Feature Metric | Dialogflow Essentials (ES) \[15, 19\] | Dialogflow Customer Experience (CX) \[15, 19\] |
| :---- | :---- | :---- |
| Billing Increment Unit | Per Individual Request (turn-by-turn) \[15\] | Per Active Session (entire conversation) \[15\] |
| Standard Text Pricing | $0.002 per request \[15, 19\] | $20.00 per 1,000 sessions \[15, 19\] |
| Standard Voice Pricing | $0.0065 per 15 seconds \[15\] | $45.00 per 1,000 sessions \[15\] |
| Free Tier / Trial Credits | 1,000 free requests monthly \[15\] | $600 one-time trial credit \[15\] |
| Optimal Conversation Length | Short interactions (\<5 turns) \[15\] | Deep, multi-turn interactions (\>10 turns) \[13, 15\] |
| Version Control & CI/CD | Manual JSON import/export \[15, 19\] | Built-in flow versioning, environment rollouts \[15, 16, 19\] |
| Traffic Splitting / A-B Testing | Unsupported \[15\] | Supported natively \[15, 19\] |
| Debugging Tools | Basic diagnostic panel \[15, 16\] | State-aware console, parameter tracking \[16\] |

The cost implications are highly dependent on conversation depth.\[15\] For an enterprise processing 5,000 monthly conversations with a low density of 8 turns per conversation, the cost comparison is:  
ES Cost=(5,000×8−1,000)×$0.002=$78.00 USD monthly  
CX Cost=(  
1,000  
5,000  
​  
)×$20.00=$100.00 USD monthly  
In this scenario, Dialogflow ES is approximately 22% more cost-effective.\[15\] However, for high-density conversations averaging 20 turns each across 2,000 sessions:  
ES Cost=(2,000×20−1,000)×$0.002=$78.00 USD monthly  
CX Cost=(  
1,000  
2,000  
​  
)×$20.00=$40.00 USD monthly  
For high-turn conversations, Dialogflow CX's session-based billing model becomes significantly more cost-effective.\[15\]

# Cloud Dataflow: High-Throughput Distributed Data Pipelines

For enterprise data processing, Google Cloud Dataflow provides a fully managed, serverless execution engine for batch and streaming pipelines.\[21, 22\] Dataflow is built on Apache Beam, an open-source programming model that decouples data transformation logic from the underlying execution runtime.\[21, 22\]

## Compute-State Separation via Distributed Shuffle

A key performance challenge in big data processing is the shuffle operation, which groups and joins key-value datasets across separate processing nodes.\[23, 24\] Traditionally, worker VMs were responsible for both computing transformations and storing state data locally, using attached persistent disks.\[24, 25, 26\] This approach consumed CPU and memory resources on the workers and bound the pipeline's execution to the disk performance of individual VMs.\[24, 25\]  
Dataflow addresses this by separating the compute layer from the state layer using two specialized backend services \[24\]:

* Dataflow Shuffle (for Batch Pipelines): Batch jobs utilize Dataflow Shuffle by default, offloading grouping operations from worker VMs to a specialized backend service.\[23, 24\] This service uses optimized, distributed in-memory and on-disk file systems to execute operations such as GroupByKey and Combine.\[23, 24\]  
* Streaming Engine (for Streaming Pipelines): Streaming pipelines must continuously store and aggregate data within defined time windows.\[21, 24, 26\] The Streaming Engine moves state storage and streaming shuffle operations off the worker VMs and into a managed backend service, allowing workers to focus solely on executing user code.\[24, 25, 26\]

## Network and Infrastructure Configurations

To support this separated architecture, Google employs several network and hardware configurations \[23, 25\]:

* Internal IPv6 Addressing: Worker VMs can be assigned IPv6 addresses from Google's internal ranges (e.g., 2600:2d00::/28) to facilitate optimized, direct communication with the Shuffle service backend.\[23\]  
* Disk Allocations: Batch jobs default to a 25 GB boot disk on worker VMs.\[23\] Because shuffle data is offloaded to the backend, larger disks are only needed for pipelines with high local disk I/O requirements.\[23\]  
* Optimized Worker Machine Types: By offloading state storage, streaming pipelines can run on smaller machine types (such as n1-standard-2 instead of the larger n1-standard-4), reducing overall compute resource consumption.\[24, 25, 26\]

## Systemic and Scaling Implications

Decoupling compute from state directly impacts performance, scalability, and cost \[23, 24\]:

* Autoscaling Responsiveness: In traditional local-disk architectures, scaling down workers is slow because active shuffle data stored on local disks would be lost if the VM was terminated.\[23\] Because Dataflow VMs do not hold persistent shuffle state, they can be scaled down quickly.\[23\] In streaming pipelines, the Streaming Engine can downscale workers within 3 minutes of a drop in data volume, compared to 6 minutes for local-state architectures, leading to more responsive scaling.\[24, 26\]  
* Scalability Thresholds: Moving shuffle operations off local disks allows pipelines to scale to very large datasets.\[24\] Traditional architectures often capped simultaneously shuffled data at 50 TB due to worker coordination overhead.\[24\] With Dataflow Shuffle, pipelines routinely scale to hundreds of terabytes and petabytes of data.\[24, 27\]

# Developer and Interface Flow: Material Design 3 and Kotlin Flow

The "Flow" designation also extends to software engineering layers within Google’s developer ecosystems, notably in front-end design and mobile application state management.

## Material Design 3 Motion Physics

In user interface design, Google's Material Design 3 (M3 Expressive) motion system uses a physics-based approach to replace legacy linear and easing-curve animations.\[28, 29\]  
The system uses simulated springs to drive interactive transitions.\[29\] The physical behavior of any UI transition is controlled by a composite system of two primary attributes \[29\]:  
Stiffness (k)andDamping (c)  
The mechanical behavior is governed by the spring force equation:  
F=−kx−cv  
where x represents the displacement vector and v represents velocity. Higher stiffness (k) increases acceleration to resolve motion faster, while higher damping (c) reduces oscillation to resolve bouncing.\[29\]  
M3 provides two core motion schemes \[29\]:

* Expressive Scheme: Uses underdamped spring settings that deliberately overshoot final values, creating a slight elastic bounce for prominent UI elements and gestures.\[29\]  
* Standard Scheme: Uses critically damped settings to minimize bounce, optimized for functional, utility-focused products.\[29\]

To ensure consistent motion across varied hardware form factors (wearables, mobile phones, tablets), developers apply spring tokens, such as md.sys.motion.spring.fast.spatial.\[29\] The physics engine automatically adjusts the actual pixel duration at runtime to ensure the motion feels consistent relative to the device's screen size.\[29\]

## Kotlin Flow in Android Development

In Android application development, Kotlin Flow provides an asynchronous, cold data stream API designed to handle reactive state changes.\[30, 31\] Unlike hot streams that emit data regardless of subscribers, a Kotlin Flow runs only when actively collected, preventing resource leaks.\[31\]  
A common pattern in Android applications is converting cold flows into hot, state-retaining holders using the stateIn operator.\[31\] This operator requires a SharingStarted policy to manage resource lifetimes:

* SharingStarted.Lazily: Starts the upstream flow when the first subscriber arrives and keeps it active indefinitely.\[31\]  
* SharingStarted.WhileSubscribed: Starts collection when subscribers are active and automatically pauses downstream execution if subscribers drop, saving memory during background application states.\[31\]

To verify asynchronous behavior, tests employ the Turbine library.\[31\] This framework collects stream emissions sequentially and asserts against expected values without requiring manual coroutine synchronization.\[31\]

# Strategic Synthesis: The Unified "Flow" Vision

Analyzing these technologies reveals a consistent pattern in Google's engineering direction: abstracting procedural execution into intent-driven state management.  
In creative media, Google Flow replaces frame-by-frame timelines with semantic directions and an agentic coordinator.\[1, 3\] In enterprise computing, Workspace Studio eliminates brittle, code-heavy integrations in favor of reasoning-based agent flows.\[7\] Within conversational interfaces, Dialogflow CX transitions from fragile, context-dependent matching to structured state-machine logic.\[13, 17\] In backend infrastructure, Cloud Dataflow decouples computing tasks from persistent storage states to achieve elastic scalability.\[24\] Finally, in application development, Kotlin Flow and Material Design Motion model UI state and visual transitions as continuous, responsive systems of state.\[29, 30\]  
Across consumer, developer, and infrastructure platforms, this cohesive approach prioritizes declarative systems that maintain state and reason through transitions. This architecture forms the foundation of Google's self-optimizing, agentic ecosystem.

1. The Ultimate Guide to Google Flow Agent for AI Videos: Hidden features, pro tips, and the absolute best use cases. \- Reddit, [https://www.reddit.com/r/promptingmagic/comments/1tt4icw/the\_ultimate\_guide\_to\_google\_flow\_agent\_for\_ai/](https://www.reddit.com/r/promptingmagic/comments/1tt4icw/the_ultimate_guide_to_google_flow_agent_for_ai/)  
2. Introducing Gemini Omni for Google Flow and Flow Music, [https://blog.google/innovation-and-ai/models-and-research/google-labs/flow-updates/](https://blog.google/innovation-and-ai/models-and-research/google-labs/flow-updates/)  
3. Google Flow \- AI Creative Studio for Video, Images & Custom Tools, [https://labs.google/fx/tools/flow](https://labs.google/fx/tools/flow)  
4. Google AI plans with Cloud Storage \- Google One, [https://one.google.com/about/google-ai-plans/](https://one.google.com/about/google-ai-plans/)  
5. Create videos in Google Flow \- Android, [https://support.google.com/flow/answer/16353334?hl=en\&co=GENIE.Platform%3DAndroid](https://support.google.com/flow/answer/16353334?hl=en&co=GENIE.Platform%3DAndroid)  
6. Google Flow Beta \- Apps on Google Play, [https://play.google.com/store/apps/details?id=com.google.android.apps.labs.whisk](https://play.google.com/store/apps/details?id=com.google.android.apps.labs.whisk)  
7. How Google's Workspace Studio Is Transforming Enterprise ..., [https://biztechmagazine.com/article/2026/03/how-googles-workspace-studio-transforming-enterprise-workflows](https://biztechmagazine.com/article/2026/03/how-googles-workspace-studio-transforming-enterprise-workflows)  
8. Workflows \- Google Cloud, [https://cloud.google.com/workflows](https://cloud.google.com/workflows)  
9. Automate Workflows with Agentic AI Powered by Gemini \- Google Workspace Studio, [https://workspace.google.com/studio/](https://workspace.google.com/studio/)  
10. Tips to create flows with AI \- Google Workspace Learning Center, [https://support.google.com/a/users/answer/16430486?hl=en](https://support.google.com/a/users/answer/16430486?hl=en)  
11. Dialogflow CX | Google Cloud Documentation, [https://docs.cloud.google.com/dialogflow/docs](https://docs.cloud.google.com/dialogflow/docs)  
12. Is Google Dialogflow Best For Your Business? \[Review\] \- Voiceflow, [https://www.voiceflow.com/blog/dialogflow](https://www.voiceflow.com/blog/dialogflow)  
13. Understanding Dialogflow CX vs. ES: A Deep Dive into Conversational AI for Banking | by Arpita Raut | Medium, [https://medium.com/@arpita.raut/understanding-dialogflow-cx-vs-es-a-deep-dive-into-conversational-ai-for-banking-67c4a20b41b0](https://medium.com/@arpita.raut/understanding-dialogflow-cx-vs-es-a-deep-dive-into-conversational-ai-for-banking-67c4a20b41b0)  
14. Untitled, [https://www.kommunicate.io/blog/dialogflow-cx-es/\#:\~:text=Dialogflow%20ES%20is%20better%20for,and%20more%20controlled%20conversation%20design.](https://www.kommunicate.io/blog/dialogflow-cx-es/#:~:text=Dialogflow%20ES%20is%20better%20for,and%20more%20controlled%20conversation%20design.)  
15. Dialogflow CX vs ES Complete Comparison: 2026 Version Selection ..., [https://cloudinsight.cc/en/blog/dialogflow-cx-vs-es](https://cloudinsight.cc/en/blog/dialogflow-cx-vs-es)  
16. Dialogflow 1.2 : CX vs ES: Key Differences and Migration Strategy ..., [https://medium.com/@isachinkamal/dialogflow-1-2-cx-vs-es-key-differences-and-migration-strategy-e3f889e4b2b6](https://medium.com/@isachinkamal/dialogflow-1-2-cx-vs-es-key-differences-and-migration-strategy-e3f889e4b2b6)  
17. Migrating from Dialogflow ES to Dialogflow CX \- Google Cloud Documentation, [https://docs.cloud.google.com/dialogflow/cx/docs/how/migrate](https://docs.cloud.google.com/dialogflow/cx/docs/how/migrate)  
18. Dialogflow CX: Build a retail virtual agent \- Google Codelabs, [https://codelabs.developers.google.com/codelabs/dialogflow-cx-retail-agent](https://codelabs.developers.google.com/codelabs/dialogflow-cx-retail-agent)  
19. Dialogflow CX vs ES: What's the Difference? \- Kommunicate, [https://www.kommunicate.io/blog/dialogflow-cx-es/](https://www.kommunicate.io/blog/dialogflow-cx-es/)  
20. Build a Dialogflow CX Google Chat app that understands and responds with natural language, [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)  
21. Google Cloud Dataflow \- Wikipedia, [https://en.wikipedia.org/wiki/Google\_Cloud\_Dataflow](https://en.wikipedia.org/wiki/Google_Cloud_Dataflow)  
22. Dataflow overview \- Google Cloud Documentation, [https://docs.cloud.google.com/dataflow/docs/overview](https://docs.cloud.google.com/dataflow/docs/overview)  
23. Dataflow shuffle for batch jobs \- Google Cloud Documentation, [https://docs.cloud.google.com/dataflow/docs/shuffle-for-batch](https://docs.cloud.google.com/dataflow/docs/shuffle-for-batch)  
24. How Distributed Shuffle improves scalability and performance in ..., [https://cloud.google.com/blog/products/data-analytics/how-distributed-shuffle-improves-scalability-and-performance-cloud-dataflow-pipelines](https://cloud.google.com/blog/products/data-analytics/how-distributed-shuffle-improves-scalability-and-performance-cloud-dataflow-pipelines)  
25. Use Streaming Engine for streaming jobs | Cloud Dataflow \- Google Cloud Documentation, [https://docs.cloud.google.com/dataflow/docs/streaming-engine](https://docs.cloud.google.com/dataflow/docs/streaming-engine)  
26. Introducing Cloud Dataflow's new Streaming Engine | Google Cloud Blog, [https://cloud.google.com/blog/products/data-analytics/introducing-cloud-dataflows-new-streaming-engine](https://cloud.google.com/blog/products/data-analytics/introducing-cloud-dataflows-new-streaming-engine)  
27. Dataflow: streaming analytics \- Google Cloud, [https://cloud.google.com/products/dataflow](https://cloud.google.com/products/dataflow)  
28. Material Design Motion \- YouTube, [https://www.youtube.com/watch?v=cQzien5H2Do](https://www.youtube.com/watch?v=cQzien5H2Do)  
29. Motion – Material Design 3, [https://m3.material.io/styles/motion/overview/how-it-works](https://m3.material.io/styles/motion/overview/how-it-works)  
30. Additional resources for Kotlin coroutines and flow \- Android Developers, [https://developer.android.com/kotlin/coroutines/additional-resources](https://developer.android.com/kotlin/coroutines/additional-resources)  
31. Testing Kotlin flows on Android, [https://developer.android.com/kotlin/flow/test](https://developer.android.com/kotlin/flow/test)

