**Computational Architectures of Learned Physics:**   
**Google's Gemini Omni World Model and the Future of Synthetic Reality Simulation**

The Paradigm Shift in Generative Artificial Intelligence: From Pixel Aggregation to World Modeling  
The launch of Google DeepMind’s Gemini Omni model family, led by the release of the Gemini Omni Flash variant on May 19, 2026, represents a fundamental shift in the design of generative media architectures.\[1, 2\] Traditionally, video generation systems have operated as statistical pixel predictors.\[2\] By pattern-matching high-dimensional visual data at scale, these legacy systems learned what physical actions—such as a falling ball or a draping cloth—looked like visually, reproducing these patterns without any underlying understanding of spatial, structural, or mechanical reality.\[2, 3\] This approach suffered from severe physical deviations, such as geometric morphing, shadows disconnecting from their light sources, and fluid textures moving as static, rigid planes.\[2\]  
To address these limitations, Gemini Omni is designed as a natively multimodal architecture.\[1, 2\] Rather than routing information through disjointed pipelines—where separate models independently process text, vision, and audio before sequential rendering—the Omni engine processes and synthesizes all modalities simultaneously within a single transformer-based network.\[2, 4\] By bypassing the translation and conversion layers of split-stack architectures, the model preserves high-dimensional contextual data that would otherwise be lost.\[2\] For example, when a user provides a reference image alongside a complex text prompt, Omni analyzes both simultaneously, maintaining fine-grained details that are typically lost in sequential text-to-video pipelines.\[2\]  
This unified multimodal architecture enables Gemini Omni to function as a world model rather than a simple media generator.\[2\] As described by Google DeepMind CEO Demis Hassabis, a world model builds an internal representation of physical reality, allowing it to calculate how an environment should behave and evolve.\[2, 5\] This transitions generative video from static visual synthesis to dynamic physical simulation.\[3\] The model is trained to comprehend the rules of gravity, kinetic energy, and fluid dynamics, ensuring that its generated outputs obey real-world physical constraints across temporal sequences.\[1, 2\]  
\--------------------------------------------------------------------------------  
Core Engineering: The Technical Lineage of Project Genie  
The architectural foundation of Gemini Omni’s physical simulation capabilities is derived from Project Genie, an 11-billion-parameter foundation world model trained by Google DeepMind.\[2, 6\] Genie demonstrated that action-controllable, interactive virtual worlds could be simulated in an unsupervised manner solely by training on unlabeled internet videos, including 30,000 hours of 2D platformer gameplay.\[6\] To mitigate the extreme memory constraints associated with standard vision transformers, Genie introduced Spatiotemporal (ST) transformer blocks, which decompose high-dimensional attention into separate spatial and temporal operations.\[6\]  
For a tokenized input tensor of shape (T,H,W), where T represents the temporal dimension, and H and W represent the spatial dimensions, the ST transformer block applies three consecutive layers \[6\]:  
Input Tensor X∈R  
T×H×W×D  
Spatial Attention Layer  
This layer calculates attention independently across each spatial slice of shape (1,H,W) for every frame in the sequence.\[6\] It maps the intra-frame structural and geometric relationships without considering temporal movement.\[6\]  
Temporal Attention Layer  
This layer applies causal temporal attention along each coordinate slice of shape (T,1,1) across the timeline.\[6\] This mechanism enforces temporal consistency by restricting the model's attention to past frames when predicting the future state.\[6\]  
Feed-Forward Layer  
A standard feed-forward network processes the outputs of both attention steps, projecting the resulting representations into the next latent layer of the transformer.\[6\]  
This ST block mechanism is implemented across three key components that collectively simulate a continuous physical environment \[6\]:  
The Video Tokenizer  
To compress raw high-resolution video frames into discrete latent tokens, the architecture uses a Vector Quantized Variational Autoencoder (VQ-VAE) built with ST transformer blocks.\[6\] The encoder takes raw input frames x  
1:T  
​  
 and maps them to discrete latent tokens z  
1:T  
​  
 within a codebook.\[6\] The decoder then reconstructs these latents back into pixel space as reconstructed frames   
x  
^  
1:T  
​  
.\[6\] The tokenizer is trained independently in the first stage of the pipeline to preserve high-fidelity semantic representations.\[6\]  
The Latent Action Model  
To learn the physical forces driving transitions between frames without requiring manual action labels, the Latent Action Model (LAM) is trained as a VQ-VAE.\[6\] The LAM encoder takes pixel-space frames x  
1  
​  
 to x  
t+1  
​  
 and maps them to a discrete codebook of latent actions a  
1  
​  
 to a  
t  
​  
.\[6\] For instance, Genie restricts this codebook to 8 discrete vectors, representing the fundamental directional and mechanical actions possible within a 2D environment.\[6\] The companion LAM decoder uses the prior frames and these predicted actions to reconstruct the next frame, training the codebook to represent meaningful physical transitions in a completely unsupervised fashion.\[6\]  
The Dynamics Model  
The dynamics model acts as the transition engine, predicting the future state of the world based on history and active intervention.\[6\] Built as a decoder-only Masked Generative Video Transformer (MaskGit) using ST blocks, it operates on the discrete latents generated by the video tokenizer.\[6\] At any given timestep t, the dynamics model receives the randomly masked latent tokens z  
1:t−1  
​  
 along with the latent actions a  
1:t−1  
​  
.\[6\] It then predicts the probability distribution of the next latent token z  
t  
​  
.\[6\]  
Because the ST blocks enforce causal temporal attention, the dynamics model can be trained on all frames of a sequence simultaneously, mapping inputs z  
1:T−1  
​  
 and a  
1:T−1  
​  
 to target outputs z  
2:T  
​  
.\[6\] The dynamics model is co-trained alongside the LAM; however, gradients from the dynamics loss do not backpropagate into the latent action codebook, ensuring that the actions maintain their primitive physical semantics.\[6\]  
During inference, a user provides an initial seed frame, which the video tokenizer converts into z  
1  
​  
.\[6\] When the user inputs a control action (mapped to an integer from the 8-action codebook), the dynamics model processes z  
1  
​  
 and a  
1  
​  
 to predict z  
2  
​  
.\[6\] The video tokenizer's decoder then projects z  
2  
​  
 back into pixel space as frame x  
2  
​  
, repeating this loop at 20 to 24 frames per second to enable interactive, real-time simulation.\[6, 7\]  
\--------------------------------------------------------------------------------  
The Mechanics of a Learned Physics Engine  
The core differentiator of Gemini Omni is its "learned physics engine," which contrasts sharply with the deterministic, hardcoded physics engines used in traditional game development platforms like Unity or Unreal Engine.\[3\] In a traditional engine, physical behaviors are dictated by manually coded equations.\[3\] Rigid body interactions are governed by Newtonian formulas, such as:  
F

\=m  
a

Collision detection is calculated via geometric bounding volumes, and gravity is applied as a constant external force.\[3\] While this ensures mathematical precision, traditional physics engines require manual configuration for every object and struggle to scale when simulating complex, unstructured physical environments.\[3\]  
Gemini Omni, conversely, learns physical laws directly from observational data.\[3\] By analyzing spatial-temporal video sequences, the model builds an implicit, high-dimensional representation of how forces interact.\[2, 3\] It does not execute explicit differential equations; instead, it predicts consecutive frames based on its learned internal model of physical constraints.\[2, 3\]  
This probabilistic physics engine was showcased in three key demonstrations during the model’s launch at Google I/O 2026:

* The Marble Run: A simulation depicting a marble traveling down a complex, multi-tiered track demonstrated an accurate understanding of gravitational acceleration and kinetic energy.\[2, 3\] The marble’s acceleration matched realistic gravity curves, its bounce trajectories aligned with the physical angles of impact, and the model synthesized synchronized, collision-accurate audio (such as wood-on-wood impacts and metallic bell rings) in perfect temporal alignment with the visual events.\[2, 3, 8\]  
* Claymation Protein Folding: Omni successfully rendered a claymation-style educational video illustrating the complex biological process of protein folding.\[2, 3\] The model maintained the textural consistency of the clay across the sequence while accurately simulating the spatial folding mechanics of the protein molecule, demonstrating that its representations extend beyond simple pixel-matching to encompass actual structural logic.\[2, 3\]  
* Hand-Drawn to Animation: A static, hand-drawn character sketch was transformed into a coherent 10-second animated sequence.\[3\] Rather than applying simple parallax or flat 2D distortions, the model inferred the 3D volume of the character, animating secondary physical behaviors such as fabric drape, momentum-driven hair movement, and shifting facial perspectives, all while maintaining character identity.\[3\]

Despite these capabilities, users and researchers have identified physical inaccuracies, describing Omni’s simulations as "dream-like" states where complex geometries can occasionally warp, disappear, or fail to maintain consistent physics over multiple iterations.\[9\] When tasked with highly complex movements, the model can experience spatial reasoning errors, where structural details mutate when they move out of the frame and return.\[9\]  
Addressing these limitations is an active area of research.\[9\] Alternative approaches to world modeling include Yann LeCun's Joint Embedding Predictive Architecture (JEPA), which avoids predicting exact pixel values by calculating representations in a joint embedding space.\[9\] Other methodologies explore integrating differentiable physics engines—such as NVIDIA Newton—directly into the transformer's loss calculation, allowing the model to learn physical laws via analytical gradients rather than pure observational inference.\[9\]  
\--------------------------------------------------------------------------------  
Technical and Qualitative Comparison: Gemini Omni vs. OpenAI Sora v3.0  
By 2026, the generative video space has transitioned from simple prompt-to-video synthesis to a competition between "General World Models".\[8\] This landscape is defined by the technical divergence between Google’s Gemini Omni (specifically the Omni Flash iteration) and OpenAI's Sora (v3.0).\[1, 8\]

| Evaluation Metric | Google Gemini Omni (2026) | OpenAI Sora (v3.0) |
| :---- | :---- | :---- |
| Architectural Paradigm | Unified Native Multimodal Transformer (Any-to-Any).\[2, 4\] | Diffusion Transformer (DiT) Video Generator.\[8\] |
| Max Native Resolution | 8K Ultra HD.\[8\] | 12K Cinematic Wide.\[8\] |
| Max Continuous Duration | 10 seconds (Flash cap) / 15 minutes (Stitched).\[8, 10\] | 5 minutes continuous (unstitched).\[8\] |
| Physics Simulation Method | Logical-contextual learned physics.\[8\] | Neural Physics Engine / World Engine.\[8\] |
| Physics Accuracy Rating | High (Logical consistency).\[8\] | Ultra-High (Simulated weight and friction).\[8\] |
| Processing Speed / Latency | Real-time (30fps live generation / sub-100ms).\[8\] | Near real-time (1:2 computation ratio).\[8\] |
| Ecosystem & Integration | Google Workspace, YouTube Shorts, Flow.\[1, 8\] | Adobe Creative Cloud, Standalone API.\[8\] |
| Primary Use Cases | Interactive storyboarding, e-commerce, real-time editing.\[11, 12\] | Cinematic features, high-end VFX, marketing hero shots.\[11\] |

These technical differences lead to distinct strengths and weaknesses in practical applications. Sora 3.0 operates with a dedicated Neural Physics Engine that computes physical weight, friction, and fluid dynamics within the scene.\[8\] This allows it to model light refraction through moving fluids with up to 98% accuracy compared to offline cinematic renderers.\[8\] Sora excels at maintaining detail stability over long, continuous takes, keeping character attributes like clothing patterns and freckles stable over five minutes without drifting.\[8\]  
Gemini Omni, while displaying slightly less advanced light-bounce calculations, excels in interactive workflows, temporal logic, and text-rendering consistency.\[8\] Because it is a native multimodal model, Omni can render accurate written text across various alphabets (including highly complex non-Latin scripts like Chinese, Japanese, and Korean) within the simulated video environment.\[11\]  
Furthermore, Gemini Omni shows superior performance in applications requiring high visual accuracy, such as e-commerce product demonstrations.\[12\] In fashion and apparel simulation, Omni maintains fabric pattern consistency and exact textile movements across different camera angles.\[12\] Sora, by contrast, tends to introduce creative interpretations that can subtly alter the structural properties of a product to achieve a more dramatic, cinematic look.\[12\] This makes Omni the more practical choice for direct commercial representations, while Sora remains preferred for stylized, aspirational brand narratives.\[12, 13\]  
\--------------------------------------------------------------------------------  
Stateful Conversational Video Editing and Multimodal Synthesis  
Gemini Omni’s native multimodality enables stateful conversational video editing.\[1, 2\] In typical video generation pipelines, modifying a generated output requires re-prompting from scratch or applying computationally intensive post-processing masks. Omni treats video editing as a multi-turn dialogue, where each instruction builds on the previous state.\[1, 14\]  
When a user provides a conversational instruction—such as dimming the lights, moving the camera over a character's shoulder, or replacing a background—the model does not simply paste a new layer over the existing video frames.\[2, 4\] Instead, it uses its latent world model to re-reason the physical properties of the entire environment.\[2\] For a lighting change, the model recalculates global illumination, altering how light bounces off the character's skin, how shadows fall relative to the new light source, and how reflections shift on shiny surfaces.\[2, 3\] This ensures that the structural boundaries of characters and objects remain consistent across edits, avoiding the visual drifting common in frame-by-frame processing.\[2, 3\]  
This stateful consistency supports several advanced visual editing capabilities:

* Object and Character Swapping: Users can upload a reference image of a new object or a character's face and prompt the model to swap it into an existing video sequence.\[2\] The model extracts the visual details—such as geometry, texture, and materials—from the reference image and projects them into the scene, aligning them with the spatial coordinates and movements of the original video.\[2\]  
* Multimodal Action Synthesis: Omni can combine multiple input modalities to guide video generation.\[14, 15\] For example, a user can provide a reference sketch of a vehicle and a video clip of a bird in flight, prompting the model to generate a photorealistic flying machine that mimics the aerodynamic motion of the bird.\[16\]  
* Personalized Digital Avatars: Creators can onboard their own digital likenesses by recording their face and voice.\[1, 15\] The model builds a personalized digital twin that can be placed into generated scenes, speaking and moving naturally while maintaining anatomical and acoustic identity.\[1, 15\]

To create and use a personal avatar, users must meet specific requirements and complete an onboarding process \[15\]:

* User Eligibility: The user must be 18 years of age or older, signed into a personal Google Account with an active Google AI plan, and reside outside of restricted geographical areas, which currently include the European Economic Area (EEA), Switzerland, and the United Kingdom.\[15\]  
* Onboarding Steps: On an Android device, the user accesses the Gemini platform, selects the "Avatar" file addition option, and records their face and voice using the device's camera and microphone.\[15\] Successful recording requires holding the device at eye level, ensuring neutral, clear lighting, and keeping the face fully visible (regular glasses are permitted, but sunglasses, hats, or face masks are prohibited).\[15\] The recording must occur in a quiet space with a clean background free of other faces.\[15\]  
* Deployment Prompting: Once onboarded, the user can reference their digital twin in prompts using the syntax @\[username\].\[15\] For example, a prompt such as "Create a video of @\[username\] singing with an orchestra" triggers the model to synthesize the user's likeness and voice within the generated scene.\[15\]  
* Data Deletion Protocols: Users can manage and delete their personal avatar through the Gemini app's settings.\[15\] Deleting the avatar immediately halts the generation of new content using that likeness and purges the raw selfie video and voice recordings from Google's active storage systems.\[15\] However, any previously generated and published videos remain unaffected.\[15\]

\--------------------------------------------------------------------------------  
Provenance, Safety, and Enterprise Deployment  
Because Gemini Omni allows for the highly realistic editing of video, audio, and environmental reality, the potential for synthetic media manipulation is a significant concern.\[17\] To address this, Google has built a dual-layer provenance and verification framework directly into the generation pipeline, combining pixel-level watermarking with cryptographic metadata.\[4, 15\]  
SynthID Digital Watermarking  
Every video generated or edited by Gemini Omni automatically incorporates Google’s SynthID watermark.\[14, 17\] SynthID does not rely on metadata tags, which are easily stripped, or visible logo overlays, which degrade visual quality.\[4, 15\] Instead, it embeds an imperceptible digital signal directly into the pixel values of the video frames.\[4, 15\]  
The watermarking process uses two deep learning models trained together: an embedding model that applies the watermark by aligning it with the structural and color properties of the host image, and an identification model that detects the watermark’s presence.\[15\] This watermark is designed to survive common post-processing operations, including:

* Lossy compression and re-encoding (e.g., converting to H.264/H.265 formats).\[2, 15\]  
* Resizing, cropping, and aspect ratio changes.\[2, 15\]  
* Visual filters, color-grading, and brightness modifications.\[2, 15\]

C2PA Content Credentials  
In addition to pixel-level watermarking, Gemini Omni outputs are tagged with C2PA (Coalition for Content Provenance and Authenticity) Content Credentials.\[4, 15\] This standard attaches a cryptographically signed manifest to the video file, detailing its origin, history, and whether generative AI was used in its creation.\[4, 15\]  
This metadata is captured and verified throughout the content lifecycle.\[15\] For example, Google’s Pixel devices document authentic footage at the moment of capture, while the SynthID API on Google Cloud's Gemini Enterprise platform allows enterprise customers to run automated backend detection of synthetic media to prevent fraud or coordinate content moderation.\[15\]  
Enterprise Developer APIs  
For commercial developers, Google offers pay-as-you-go pricing for Gemini Omni API access on Vertex AI, categorized into Text-to-Video and Image-to-Video variants.\[2\]  
Generation Cost=Base Charge+(Duration in Seconds×$0.1)  
The Base Charge scales with resolution, set at $0.20 for 720p and 1080p, and $1.00 for 4K.\[2\] Image inputs do not incur additional charges.\[2\]

| Output Configuration | Base Charge | Per-Second Rate | Final Cost (10-Second Video) |
| :---- | :---- | :---- | :---- |
| 720p Resolution | $0.20.\[2\] | $0.10.\[2\] | $1.20.\[2\] |
| 1080p Resolution | $0.20.\[2\] | $0.10.\[2\] | $1.20.\[2\] |
| 4K Resolution | $1.00.\[2\] | $0.10.\[2\] | $2.00.\[2\] |

These API options enforce strict technical specifications to ensure system stability and generation quality \[2\]:

* Supported Input Formats: PNG, JPEG, JPG, and WebP.\[2\]  
* Dimensional Bounds: A minimum resolution of 128×128 pixels is required.\[2\]  
* File Size Limits: Individual reference images must be under 20MB.\[2\]  
* Multimodal Limits: Image-to-Video requests accept up to 7 reference images alongside text prompts capped at 20,000 characters.\[2\]

\--------------------------------------------------------------------------------  
Theoretical and Physical Embodiment: Towards Artificial General Intelligence  
The development of Gemini Omni has significant implications for both cognitive science and artificial general intelligence (AGI).\[5, 18\] The mechanics of action-conditioned world modeling draw a direct parallel to the theory of Active Inference and predictive coding in biological cognitive systems.\[18\]  
This framework suggests that human consciousness does not process sensory inputs as a direct, passive recording of the physical world.\[18\] Instead, the human brain constantly generates an internal simulation of reality based on past experiences and active goals.\[18\] The sensory data collected by our eyes and ears acts as an error signal (or loss function) to calibrate and update this internal simulation.\[18\]  
Similarly, Gemini Omni uses its learned parameters to predict the next physical state of a scene, using the loss functions of its training data to align its predictions with physical reality.\[2, 18\] Demis Hassabis has noted that developing these simulated environments is a critical milestone toward AGI, as it allows digital agents to develop the reasoning, problem-solving, and spatial skills necessary to navigate the physical world.\[6, 7\]  
This theoretical foundation directly influences physical robotics, as demonstrated by DeepMind’s release of Gemini Robotics-ER 1.6 in May 2026.\[19\] Built as a reasoning-first spatial reasoning model, Robotics-ER 1.6 enhances spatial logic, task planning, and success detection for physical agents.\[19\] In a collaboration with Boston Dynamics, this system enabled robots to perform complex instrument readings, interpreting analog gauges and sight glasses in real-world environments.\[19\]  
By connecting the physical reasoning of Gemini Omni with physical robotics, DeepMind is closing the loop between digital simulation and physical action.\[19, 20\] The high-quality synthetic video data generated by Omni can be used to train robotic agents within realistic virtual environments, accelerating development in computer vision, autonomous navigation, and physical automation.\[20\]  
\--------------------------------------------------------------------------------  
Conclusions  
The emergence of Google DeepMind’s Gemini Omni represents a major milestone on the path toward unified world simulation. By transitioning from pattern-matching pixel generators to natively multimodal world models, Omni demonstrates a strong capacity to simulate physical laws, maintain temporal consistency, and support stateful conversational editing.  
While limitations remain—such as the 10-second continuous generation cap of the Flash model, spatial reasoning errors in highly complex scenes, and current safety restrictions on voice editing—the underlying architecture is highly scalable. The integration of these learned physics engines with robotic systems (such as Gemini Robotics-ER 1.6) and content transparency standards (such as SynthID and C2PA) establishes a robust framework for both virtual and physical applications.  
As these systems continue to evolve, the boundaries between simulated and physical reality will continue to blur, transforming workflows across entertainment, e-commerce, software development, and robotics.  
\--------------------------------------------------------------------------------

1. Gemini Omni Flash: Google's New Model and the Future of Editable Reality \- Product with Attitude, [https://karozieminski.substack.com/p/gemini-omni-flash-ai-video-editable-reality](https://karozieminski.substack.com/p/gemini-omni-flash-ai-video-editable-reality)  
2. Google Gemini Omni: Features, Pricing & Google Flow Guide, [https://www.atlascloud.ai/blog/guides/gemini-omni-features-overview](https://www.atlascloud.ai/blog/guides/gemini-omni-features-overview)  
3. Google I/O Review (3/5) — Gemini Omni Is a Learned Physics ..., [https://dev.to/ww-w-ai/google-io-review-35-gemini-omni-is-a-learned-physics-engine-4ka8](https://dev.to/ww-w-ai/google-io-review-35-gemini-omni-is-a-learned-physics-engine-4ka8)  
4. Gemini Omni: One Model for Text, Image, Audio, and Video | DataCamp, [https://www.datacamp.com/blog/gemini-omni](https://www.datacamp.com/blog/gemini-omni)  
5. Gemini Omni is Google's new world model, with advanced AI video generation capabilities, [https://mashable.com/article/gemini-omni-flash-ai-video-generation-google-io-2026](https://mashable.com/article/gemini-omni-flash-ai-video-generation-google-io-2026)  
6. Understanding Genie: Generative Interactive Environments for ..., [https://medium.com/@arjunagarwal899/understanding-genie-generative-interactive-environments-for-world-modeling-fbd90b446b3b](https://medium.com/@arjunagarwal899/understanding-genie-generative-interactive-environments-for-world-modeling-fbd90b446b3b)  
7. Genie 3 — Google DeepMind, [https://deepmind.google/models/genie/](https://deepmind.google/models/genie/)  
8. Gemini Omni vs OpenAI Sora: 2026 AI Video Comparison, [https://resource.digen.ai/gemini-omni-vs-openai-sora-2026-comparison/](https://resource.digen.ai/gemini-omni-vs-openai-sora-2026-comparison/)  
9. Gemini Omni | Hacker News, [https://news.ycombinator.com/item?id=48196609](https://news.ycombinator.com/item?id=48196609)  
10. Gemini Omni Released: Google's Multimodal AI Video Model \- OpusClip Blog, [https://www.opus.pro/blog/gemini-omni-released-multimodal-ai-video-model-explained](https://www.opus.pro/blog/gemini-omni-released-multimodal-ai-video-model-explained)  
11. Gemini Omni vs Sora 2 (Retired): Which Replaces Sora? \- OpusClip ..., [https://www.opus.pro/blog/gemini-omni-vs-sora-2-ai-video-model-comparison](https://www.opus.pro/blog/gemini-omni-vs-sora-2-ai-video-model-comparison)  
12. Gemini Omni vs Sora for Ecommerce Video Creation \- Rewarx Studio, [https://www.rewarx.com/blogs/gemini-omni-vs-sora-ecommerce-test](https://www.rewarx.com/blogs/gemini-omni-vs-sora-ecommerce-test)  
13. Gemini Omni vs Sora: Best AI Video Generator for Ecommerce, [https://www.rewarx.com/blogs/gemini-omni-vs-sora-ai-video-generator-ecommerce](https://www.rewarx.com/blogs/gemini-omni-vs-sora-ai-video-generator-ecommerce)  
14. Google Unveils Gemini Omni, An AI Model That Can Create Videos From Any Input, [https://pulse2.com/google-unveils-gemini-omni-an-ai-model-that-can-create-videos-from-any-input/](https://pulse2.com/google-unveils-gemini-omni-an-ai-model-that-can-create-videos-from-any-input/)  
15. Introducing Gemini Omni \- Google Blog, [https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/)  
16. Gemini Omni \- Google DeepMind, [https://deepmind.google/models/gemini-omni/](https://deepmind.google/models/gemini-omni/)  
17. Google Introduces Gemini Omni, a Multimodal AI That Knows the World \- CNET, [https://www.cnet.com/tech/services-and-software/google-introduces-gemini-omni-a-multimodal-ai-that-knows-the-world/](https://www.cnet.com/tech/services-and-software/google-introduces-gemini-omni-a-multimodal-ai-that-knows-the-world/)  
18. Project Genie: Experimenting with infinite, interactive worlds | Hacker News, [https://news.ycombinator.com/item?id=46812933](https://news.ycombinator.com/item?id=46812933)  
19. Gemini Robotics ER-1.6 enhances reasoning to help robots navigate real-world tasks., [https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-1-6/](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-1-6/)  
20. Gemini Omni Flash \- Model Card — Google DeepMind, [https://deepmind.google/models/model-cards/gemini-omni-flash](https://deepmind.google/models/model-cards/gemini-omni-flash/)

