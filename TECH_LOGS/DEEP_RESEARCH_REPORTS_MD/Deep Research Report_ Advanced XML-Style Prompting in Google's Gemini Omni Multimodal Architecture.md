**Advanced XML-Style Prompting in Google's Gemini Omni Multimodal Architecture**  
Source guide  
This technical overview explores how XML-style structured prompting optimizes Google’s Gemini Omni architecture by organizing complex, any-to-any multimodal inputs into distinct, machine-readable segments. By utilizing specific tags to define cinematic and sensory dimensions like camera, lighting, and audio, developers can minimize context bleeding and improve the model’s focus compared to traditional unstructured text. The text further examines advanced strategies for maintaining logical rigidity in long sequences through Ahead-of-Time Context Compilation, while simultaneously addressing practical technical limitations such as interface leaks and character-based parsing errors. Ultimately, the source positions structured markup as the essential bridge for achieving deterministic execution and high-fidelity output within sophisticated AI generation workflows.

**Advanced XML-Style Prompting in Google's Gemini Omni Multimodal Architecture**

The release of Google DeepMind's Gemini Omni Flash model introduces a paradigm shift in generative artificial intelligence by pioneering native, "any-to-any" multimodal processing.\[1, 2, 3\] Historically, multimodal pipelines relied on sequential coordination where a text prompt was parsed by an initial language model, mapped to an image generator, and subsequently animated by a separate video rendering network.\[3, 4\] Every translation boundary across these fragmented systems introduced context loss, high latency, and cumulative rendering errors.\[3, 4\] In contrast, the Gemini Omni architecture natively processes text, image, audio, and video inputs simultaneously within a single core engine, producing unified outputs such as ten-second high-resolution video streams with synchronized native audio.\[1, 2, 4\]

To harness this complex, multi-input operational capacity, prompt engineering has evolved beyond natural language instruction toward rigorous, machine-readable syntax.\[5, 6, 7\] Chief among these methodologies is the deployment of XML-style structured prompting.\[5, 6\] By wrapping operational instructions, contextual datasets, and negative constraints in explicit XML tags, developers and prompt architects can manipulate the model’s attention mechanism mathematically.\[8\] This approach establishes rigid semantic boundaries, reduces context degradation over long sequences, and ensures deterministic execution across complex multimodal generation and conversational editing workflows.\[5, 6, 8\]

\--------------------------------------------------------------------------------

**Theoretical Foundations and Attention Mechanics of Structured Markup**

Autoregressive transformer models process input sequences by calculating attention weights across the entire prompt context.\[8\] In unstructured text—frequently termed "blob-prompts"—the model struggles to isolate active instructions from passive reference data or user-supplied context.\[6, 8\] This structural ambiguity leads to instruction-following failure, output format drift, and prompt injection vulnerabilities.\[6, 7, 9\]

XML-style tags solve this by segmenting the input sequence into distinct hierarchical blocks.\[5, 6, 9\] Because the pre-training corpora of advanced models contain vast volumes of structured code, markup languages, and documentation, the attention heads are highly receptive to tag-based delimiters.\[5, 6\] XML tags act as explicit structural markers, signaling to the model where administrative rules end and untrusted inputs or reference assets begin.\[7, 10\]

On structured extraction and processing tasks, XML delimiters demonstrate a substantial performance advantage over Markdown headers and plain-text separators, showing an approximate 28% to 30% reduction in syntax and formatting errors.\[11, 12\] While Markdown can bleed into the surrounding text during generation, XML tags establish absolute, parseable boundaries that prevent context bleeding.\[7, 12\]

| Prompting Format | Boundary Definition | Multi-Turn State Retention | Error Rate in Structured Tasks | Human-to-Machine Parseability |
| ----- | ----- | ----- | ----- | ----- |
| **Plain Text / Freeform** | Low (relies on linguistic inference) | Poor (high rate of cumulative context drift) | Exceptionally High (frequent formatting failures) | Poor (requires regex or NLP parsing) \[5, 9\] |
| **Markdown Headers (**\#**)** | Moderate (visual separation only) | Moderate (susceptible to formatting bleed) | Moderate (errors during programmatic parsing) | High (readable for humans, imperfect for machines) \[6, 12\] |
| **XML Delimiters (**\<tag\>**)** | Absolute (syntactic wrapping) | High (strict isolation of historical parameters) | Exceptionally Low (\~28% fewer errors than Markdown) | Complete (natively parseable by software gateways) \[11, 12\] |

The logical rigidity of XML elements mirrors the structural expectations of enterprise pipelines.\[5, 6\] By dividing a prompt into components such as `<role>`, `<instructions>`, `<context>`, and `<constraints>`, architects bypass the default conversational persona of the model.\[8\] Instead of generating polite filler, the model dedicates its token generation budget to executing mathematically verified instructions within the specified boundaries.\[7, 8\]

\--------------------------------------------------------------------------------

**The 6-Dimension Multimodal Prompting Framework**

The native multimodality of Gemini Omni Flash demands detailed creative briefs rather than simple text queries.\[1, 13\] To standardize this process, Google DeepMind established an official six-dimension prompting framework.\[1\] When applied correctly, these dimensions guide the model's spatial, temporal, and sensory generation passes, eliminating the need for downstream post-processing or external rendering systems.\[1\]

Rather than combining these dimensions into a singular prose block, prompt architects integrate them into designated XML tags.\[14\] This structural partitioning ensures that the model distributes its attention parameters proportionally across visual, audio, and textual rendering pipelines.\[8, 11\]

| XML Tag Wrapper | Target Dimension | Accepted Input Modalities | Primary Cinematic vocabulary | Operational Execution |
| ----- | ----- | ----- | ----- | ----- |
| `<camera>` | Shot Framing & Motion | Text, Video Reference | "dolly zoom", "oner", "locked off", "orbit" | Drives spatial camera trajectories and lens composition \[1\] |
| `<style>` | Aesthetic Language | Text, Image Reference | "vintage 16mm", "claymation", "noir" | Locks visual medium, grain, and color grading parameters \[1\] |
| `<lighting>` | Environmental Mood | Text, Image Reference | "golden hour", "rim lighting", "three-point" | Anchors global illumination, shadow contrast, and light sources \[1\] |
| `<location>` | Spatial Context | Text, Video Reference | "1920s jazz club", "dense fog", "white void" | Grounds generation in realistic or abstract physics environments \[1\] |
| `<action>` | Choreography & Pacing | Text, Video Reference | Sequential verb phrases, physics behaviors | Establishes chronological actor movements and temporal flow \[1\] |
| `<text_render>` | Typographical Overlay | Text | Explicit coordinates, font style, fade times | Renders precise text paths inside the generated video frame \[1\] |
| `<audio_control>` | Soundscape Generation | Text, Audio Reference | "melancholic piano", "ambient patter", dialogue | Orchestrates music, ambient sound effects, and voice cloning \[1, 2\] |

By leveraging this tag-based dictionary, a developer can construct a complex multi-layered generation brief.\[1\] For example, enclosing camera specifications inside a `<camera>` block prevents the movement cues from bleeding into the `<action>` description, ensuring that the camera and the actors move independently.\[1, 13\] This semantic separation is critical when executing advanced effects, such as a Hitchcockian dolly zoom, where the camera pulls back while the lens zooms in, maintaining a static subject while distorting the surrounding geometry.\[1\]

Furthermore, native audio integration within the `<audio_control>` tag allows for precise synchronization of environmental sound effects with visual events.\[1, 4\] If the `<action>` block describes a glass flask shattering on a concrete floor, a corresponding directive in the `<audio_control>` tag ensures that the acoustic signature of breaking glass occurs at the exact frame of impact.\[1, 2\] This native synchronization bypasses the temporal drift common in post-production audio stitching.\[4\]

The `<audio_control>` tag also manages voice references and spoken dialogue.\[1, 2\] By passing a brief vocal sample of a speaker, the model preserves that voice’s unique cadence and timbre across the generated clip, opening up use cases for consistent digital spokespersons and automated localized educational content.\[2, 15, 16\]

\--------------------------------------------------------------------------------

**API Protocols, Code-Level Parameters, and System Integrations**

Deploying XML-style prompts within programmatic environments, such as Vertex AI or the Gemini API, requires precise configuration of model parameters to ensure deterministic execution.\[5, 17, 18\] The behavior of Gemini models when processing highly structured tags is heavily influenced by the sampling configuration.\[18\]

\<system\_instruction\>

  \<role\>

    You are a Principal Technical Director specializing in Gemini Omni Flash video synthesis.

  \</role\>


  \<instructions\>

    Assemble a 10-second multimodal instruction sequence based on the user's uploaded reference assets.

    Perform an internal spatial-temporal planning pass inside \<thinking\> tags before generating the video brief.

    Isolate the final execution parameters inside \<execution\_plan\> tags.

  \</instructions\>

  \<constraints\>

    \- Maintain default model temperature parameters to prevent logical looping.

    \- Output must strictly utilize valid XML delimiters.

    \- All camera instructions must align with the official 6-dimension framework.

  \</constraints\>

\</system\_instruction\>

When integrating these instructions, developers must pay close attention to sampling parameters.\[18\] While lower temperatures are traditionally preferred for deterministic code generation, Google's documentation for Gemini models strongly recommends maintaining the default temperature of 1.0, particularly for complex tasks.\[18\] Forcing the temperature below 1.0 can cause unexpected behaviors, such as endless generation loops or degraded logical capabilities in multi-step reasoning.\[18\] Similarly, the default `top_p` should remain at 0.95 to maintain a balanced token probability distribution.\[18\]

At the codebase level, developers can use explicit context-nesting tags to organize project scopes.\[10, 19\] Passing structured parameters within `<global_context>`, `<extension_context>`, and `<project_context>` tags isolates system configurations from untrusted user inputs, dramatically reducing prompt injection risks in production environments.\[7, 19\]

For mobile and operating-system-level integrations, such as Android 16, XML templates are utilized to index and validate custom application functions.\[20\] The platform registers metadata assets via `assets/app_functions.xml` and `assets/app_functions_v2.xml`, verifying them against `assets/app_functions_schema.xsd`.\[20\] If Gemini experiences metadata resolution failures during execution, it indicates a structural misalignment between the application's native XML schema and the model's semantic understanding of the target function, necessitating explicit schema mapping in the prompt.\[20\]

\--------------------------------------------------------------------------------

**Advanced Long-Context Topologies and KV Cache Preservation**

As context windows expand to accommodate massive datasets, enterprise-grade agents face the challenge of "attention dissipation".\[21\] When global system constraints, detailed style sheets, and extensive reference documents are placed exclusively at the top of a prompt, their operational influence decays over long token distances.\[21\] This decay is driven by the Rotary Position Embedding (RoPE) mechanisms used in modern transformer architectures, which exhibit long-range attention decay.\[21\]

Furthermore, modifying or injecting rule patches dynamically during runtime disrupts the efficiency of Key-Value (KV) caching engines, leading to high prefill costs and significant spikes in Time-to-First-Token (TTFT).\[21\] To resolve these latency and attention issues, developers can implement a technique known as Ahead-of-Time Context Compilation (AOT-CC).\[21\]

Raw Prompt Stream (Uncompiled):

 \-\> \-\> \[User Query\]

(Result: Attention dissipation decays the system rules; high latency on edit)

Compiled Prompt Stream (AOT-CC):

 \-\> \-\>

(Result: Positional induction heads link the abstract tags directly to the localized definition chunk, preserving the KV cache root node)

During the compilation phase, the large master prompt is chunked, and the full system definitions are injected only into the specific chunk where a term first appears.\[21\] For downstream occurrences, human-readable terms are replaced with abstract, semantic-free identifiers, such as `<__SYS_STATE_A__ />`.\[21\]

Because these identifiers lack pre-existing semantic baggage, they do not trigger "Semantic Gravity".\[21\] Instead, they encourage the model's positional induction heads to establish direct mathematical shortcuts back to the localized definition chunk.\[21\] This structural stabilization ensures that the token distribution remains static, allowing inference engines to bake the compiled sequence into a permanent KV cache root node, maximizing cache reuse and minimizing prefill latency.\[21\]

To further prevent hallucination and maintain behavioral alignment in autonomous environments, these compiled topologies can be wrapped in meta-prompt frameworks like Agent Prompts (`Agent.MD` files) \[22\] or governed via the D.A.R.E. (De-bias, Anchor, Realign, Evaluate) protocol.\[17\] This layered structuring ensures that the agent stays anchored to its operational boundaries, even when executing multi-turn video editing tasks over extended chat sessions.\[17, 22\]

\--------------------------------------------------------------------------------

**Technical Limitations, Edge Cases, and Bug Diagnostics**

While XML prompting offers clear structural advantages, deploying it within the Google Gemini ecosystem reveals several technical limitations, edge cases, and documented software bugs.\[23, 24, 25\] Developers must understand these failure modes to build robust error-handling wrappers around their prompt pipelines.\[5, 26\]

**Interface Leaks and Parser Failures in Gemini CLI**

A notable bug exists within the Gemini Command Line Interface (CLI) where raw internal XML tags leak into the standard output stream.\[23, 24\] This issue stems from a rendering failure in the output stream parser, which is designed to intercept and process system instructions before they reach the terminal UI.\[23, 24\]

| Leaked XML Tag / Token | Core Platform | Trigger Condition | Operational Impact | Technical Mitigation |
| ----- | ----- | ----- | ----- | ----- |
| `<thought>`, `94>thought` | Gemini CLI | Activation of advanced reasoning models | Exposes internal thinking passes and raw system instructions to the terminal \[23\] | Force stream interceptors to collapse raw thought tokens into a custom UI animation \[23\] |
| `<function_calls>`, `<pre_dispatch_explanation>`, `<response>` | Gemini CLI (v0.33.1) | Execution of tool-use or directory search tasks | Prints raw internal dispatch XML directly to the console instead of executing the action silently \[24\] | Update CLI parser to correctly intercept and execute system-level function calls \[24\] |
| Omission of closing tags (e.g., missing `</translate>`) | Gemini Flash & Thinking Models | Ingestion of sequences exceeding 30k-50k tokens | Causes repetitive translation loops and merge errors in structured text generation \[25, 27\] | Implement sliding context window limits (slicing prompts to a max range of 30k tokens) \[25, 27\] |
| XML export collapse | Google AI Studio | Extended multi-turn chat sessions | AI Studio fails to export valid XML changes, breaking live code or video edit histories \[28\] | Inject the recovery prompt: *"export only XML changes. You made no changes last turn."* \[28\] |

**Long-Context Tag Degradation and Line Merging**

In high-volume translation tasks—such as processing SubRip (SRT) subtitle files—Gemini models exhibit critical degradation when context windows scale past 40,000 tokens.\[25, 27\] As the context length increases, the model begins to ignore closing XML tags.\[25, 27\] This leads to catastrophic failure modes where the model translates segments it has already processed, loops endlessly within active blocks, and merges consecutive lines of dialogue if their semantic meanings are closely aligned.\[25, 27\]

To mitigate this, developers must avoid relying entirely on tag-delimited blocks in long sessions, instead implementing a slicing mechanism that caps the active token context at approximately 30,000 tokens per execution turn.\[25, 27\]

**East Asian Typographical Newline Anomalies**

Another severe edge case involves the ingestion of the East Asian full-width space character (`\u3000`), commonly found in Chinese, Japanese, and Korean (CJK) texts.\[25, 27\] Gemini Flash and thinking models frequently misinterpret the full-width space as a standard newline character (`\n`).\[25, 27\]

In subtitle processing or dialogue generation tasks, this bug causes a single structured XML block to split prematurely.\[25, 27\] A normal two-line subtitle block may be fragmented into three or four lines, violating layout specifications and breaking the parser's alignment with downstream timing tracks.\[25, 27\] Prompt developers working with CJK assets must sanitize their input strings, stripping or converting all `\u3000` characters before passing the payload to the XML compiler.\[25, 27\]

**Middleware Conversion Mismatches**

When XML outputs generated by Gemini are routed through enterprise middleware, such as Apigee, developers encounter significant data serialization discrepancies.\[29, 30\] While XML allows for multi-layered hierarchical structures, it lacks native data-typing definitions unless validated against an XML Schema Definition (XSD).\[29\]

When converting XML responses containing array elements or empty nodes to JSON formats (via JSONToXML or XMLToJSON policies), the middleware struggles to distinguish empty strings, empty objects, and null values.\[29\] For example, a single-element array in XML is often converted into a standard JSON object rather than a list, causing severe parsing exceptions in downstream web applications.\[29\] To prevent this, developers must configure strict message validation policies or apply XSLT transforms to explicitly define arrays and types post-generation.\[29, 31\]

\--------------------------------------------------------------------------------

**Conclusion**

XML structured prompting is the foundational architecture required to govern the complex, any-to-any native multimodality of Google’s Gemini Omni ecosystem.\[1, 5, 7\] By segmenting creative instructions, multimodal reference assets, and negative constraints into explicit, machine-readable tags, prompt engineering achieves the predictability, safety, and performance necessary for production-grade deployments.\[5, 6, 7\]

Integrating Gemini Omni’s official six-dimension framework directly into structured XML schemas allows developers to mitigate context bleeding, preserve character and environmental consistency across multi-turn conversational edits, and direct unified video and audio outputs with cinematic precision.\[1, 7, 13\] While technical challenges such as long-context tag degradation, CLI interface leaks, and typographical parsing bugs persist, they can be successfully managed through robust prompt compiling strategies like Ahead-of-Time Context Compilation and precise context slicing.\[21, 25, 28\] As generative models evolve into fully realized simulation engines, structured XML syntaxes will remain the primary bridge for maintaining precise human control over multidimensional AI outputs.\[3, 5, 6\]

\--------------------------------------------------------------------------------

1. Google Omni Prompting Guide: Every Technique That Actually ..., [https://promptslove.com/blog/google-omni-prompting-guide/](https://promptslove.com/blog/google-omni-prompting-guide/)  
2. Gemini Omni from Google | Multimodal AI for Text, Image, Audio and Video \- Morphic, [https://morphic.com/resources/models/gemini-omni](https://morphic.com/resources/models/gemini-omni)  
3. Google Gemini Omni: Features, Pricing & Google Flow Guide \- Atlas Cloud, [https://www.atlascloud.ai/blog/guides/gemini-omni-features-overview](https://www.atlascloud.ai/blog/guides/gemini-omni-features-overview)  
4. What Is Google Gemini Omni? The Any-Input-to-Video AI Model Explained | MindStudio, [https://www.mindstudio.ai/blog/what-is-google-gemini-omni-multimodal-video-model](https://www.mindstudio.ai/blog/what-is-google-gemini-omni-multimodal-video-model)  
5. Structured Prompting Techniques: The Complete Guide to XML & JSON \- Code Conductor, [https://codeconductor.ai/blog/structured-prompting-techniques-xml-json/](https://codeconductor.ai/blog/structured-prompting-techniques-xml-json/)  
6. XML Is Making a Comeback in Prompt Engineering — And It Makes LLMs Better, [https://cloud-authority.com/xml-is-making-a-comeback-in-prompt-engineering-and-it-makes-llms-better](https://cloud-authority.com/xml-is-making-a-comeback-in-prompt-engineering-and-it-makes-llms-better)  
7. Prompting to Programming \- Page 2 \- Agents \- Google Developer forums, [https://discuss.google.dev/t/prompting-to-programming/361889?page=2](https://discuss.google.dev/t/prompting-to-programming/361889?page=2)  
8. Claude 4.5 System Prompts: The Ultimate XML Metaprompt Guide \- PromptsEra, [https://promptsera.com/claude-4-5-xml-system-prompts/](https://promptsera.com/claude-4-5-xml-system-prompts/)  
9. XML ChatGPT Promp Engineering | NetworkAcademy.IO, [https://www.networkacademy.io/ccna-automation/data-formats/chatgpt-promp-engineering-like-xml](https://www.networkacademy.io/ccna-automation/data-formats/chatgpt-promp-engineering-like-xml)  
10. Prompting best practices \- Claude Platform Docs, [https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)  
11. Claude XML Tags — 10 Tags With Copy-Paste Examples \- AI Prompt Library, [https://www.aipromptlibrary.app/blog/claude-xml-tags-prompt-engineering](https://www.aipromptlibrary.app/blog/claude-xml-tags-prompt-engineering)  
12. I spent 6 months testing every major prompting technique. Here's what actually works (and what's overhyped) — with real examples. : r/PromptEngineering \- Reddit, [https://www.reddit.com/r/PromptEngineering/comments/1t42u52/i\_spent\_6\_months\_testing\_every\_major\_prompting/](https://www.reddit.com/r/PromptEngineering/comments/1t42u52/i_spent_6_months_testing_every_major_prompting/)  
13. Gemini Omni Flash Guide: Prompts, Safety Risks, SynthID and PixVerse Workflow, [https://pixverse.ai/en/blog/gemini-omni-video-model-review](https://pixverse.ai/en/blog/gemini-omni-video-model-review)  
14. Structure prompts | Gemini Enterprise Agent Platform | Google Cloud ..., [https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/prompts/structure-prompts](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/prompts/structure-prompts)  
15. cnemri/awesome-gemini-omni \- GitHub, [https://github.com/cnemri/awesome-gemini-omni](https://github.com/cnemri/awesome-gemini-omni)  
16. Introducing Gemini Omni \- Google Blog, [https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/)  
17. The Prompt Playground: A Developer's Toolkit for Mastering Prompt Engineering \- Medium, [https://medium.com/@ukatsir/the-prompt-playground-a-developers-toolkit-for-mastering-prompt-engineering-53baf8d78709](https://medium.com/@ukatsir/the-prompt-playground-a-developers-toolkit-for-mastering-prompt-engineering-53baf8d78709)  
18. Prompt design strategies | Gemini API | Google AI for Developers, [https://ai.google.dev/gemini-api/docs/prompting-strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies)  
19. \[Context Mgmt\] Refactor GEMINI.md Context Loading to be Hierarchical \#16999 \- GitHub, [https://github.com/google-gemini/gemini-cli/issues/16999](https://github.com/google-gemini/gemini-cli/issues/16999)  
20. Android AppFunctions are indexed/enabled on device but Gemini cannot resolve custom function metadata \#1151 \- GitHub, [https://github.com/google-gemini/cookbook/issues/1151](https://github.com/google-gemini/cookbook/issues/1151)  
21. \[WIP / RFC\] Ahead-of-Time Context Compilation (AOT-CC): Optimizing Long-Context Attention Topologies for Context-Caching Engines \- Gemini API \- Google AI Developers Forum, [https://discuss.ai.google.dev/t/wip-rfc-ahead-of-time-context-compilation-aot-cc-optimizing-long-context-attention-topologies-for-context-caching-engines/165474](https://discuss.ai.google.dev/t/wip-rfc-ahead-of-time-context-compilation-aot-cc-optimizing-long-context-attention-topologies-for-context-caching-engines/165474)  
22. Agent Prompts \- Meta-Prompt Templates for HCD-Agile AI, [https://hcdagile.org/Agent-Prompts/](https://hcdagile.org/Agent-Prompts/)  
23. \[Bug\] Raw thought block tokens (...94\>thought) leaking into terminal output · Issue \#26742 · google-gemini/gemini-cli \- GitHub, [https://github.com/google-gemini/gemini-cli/issues/26742](https://github.com/google-gemini/gemini-cli/issues/26742)  
24. Raw XML tags from function calls are leaking into standard output \#22441 \- GitHub, [https://github.com/google-gemini/gemini-cli/issues/22441](https://github.com/google-gemini/gemini-cli/issues/22441)  
25. Markdown and XML Closing Tag Issues \- \#4 by RandomGuy \- Google AI Studio, [https://discuss.ai.google.dev/t/markdown-and-xml-closing-tag-issues/70668/4](https://discuss.ai.google.dev/t/markdown-and-xml-closing-tag-issues/70668/4)  
26. Agent Terminated: HTTP 503 MODEL\_CAPACITY\_EXHAUSTED on stateful sessions, [https://discuss.google.dev/t/agent-terminated-http-503-model-capacity-exhausted-on-stateful-sessions/348091](https://discuss.google.dev/t/agent-terminated-http-503-model-capacity-exhausted-on-stateful-sessions/348091)  
27. Markdown and XML Closing Tag Issues \- Google AI Developers Forum, [https://discuss.ai.google.dev/t/markdown-and-xml-closing-tag-issues/70668](https://discuss.ai.google.dev/t/markdown-and-xml-closing-tag-issues/70668)  
28. AI Studio "Build" \-\> forgetting to update the code \- Google AI Developers Forum, [https://discuss.ai.google.dev/t/ai-studio-build-forgetting-to-update-the-code/89062](https://discuss.ai.google.dev/t/ai-studio-build-forgetting-to-update-the-code/89062)  
29. Converting between XML and JSON with Apigee: what you need to know \- Knowledge Hub, [https://discuss.google.dev/t/converting-between-xml-and-json-with-apigee-what-you-need-to-know/17451](https://discuss.google.dev/t/converting-between-xml-and-json-with-apigee-what-you-need-to-know/17451)  
30. DSig Part 3: XML DSig vs. JSON Web Signature \- Google Developer forums, [https://discuss.google.dev/t/dsig-part-3-xml-dsig-vs-json-web-signature/17105](https://discuss.google.dev/t/dsig-part-3-xml-dsig-vs-json-web-signature/17105)  
31. How to remove xml block from response \- Apigee \- Google Developer forums, [https://discuss.google.dev/t/how-to-remove-xml-block-from-response/610](https://discuss.google.dev/t/how-to-remove-xml-block-from-response/610)

