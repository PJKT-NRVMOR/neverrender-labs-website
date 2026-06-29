**Deep Research Report:**  
*Understanding World or Predicting Future: A Comprehensive Survey of World Models*

Cognitive Foundations and the System Duality of Environment Modeling  
The conceptual genesis of world models is deeply rooted in cognitive psychology, tracing back to the theory of mental models established to explain how human agents abstract external environments into simplified, internal representations. \[1, 2\] Rather than processing raw, high-dimensional sensory inputs directly, the human cognitive system constructs compact abstractions that filter out redundant spatial noise, retaining only the essential elements and relational structures necessary to navigate the world. \[2, 3, 4\] Modern machine learning has formalized this architecture into learned internal simulators, establishing world models as a foundational paradigm in the pursuit of general artificial intelligence. \[5\] These computational frameworks allow autonomous systems to construct compact latent representations of physical dynamics, projecting future states to support planning, decision-making, and counterfactual analysis. \[5, 6\]  
The seminal survey authored by Jingtao Ding, Yunke Zhang, and their co-authors, published in ACM Computing Surveys, outlines a unified framework that organizes the historical progression of these architectures. \[7, 8\] Historically fragmented across model-based reinforcement learning, computer vision, and cognitive science, the modern world model landscape is defined by a fundamental duality between two primary environmental functions \[5, 9\]:

* World Understanding: This function emphasizes the construction of implicit internal representations to capture the underlying causal mechanisms, physical laws, and structural properties of the present state of the world. \[5, 9, 10\] By mapping high-dimensional observations into structured latent spaces, the model resolves core challenges such as object permanence, occlusion, and force propagation without needing to reconstruct every pixel of the environment. \[3, 10, 11\]  
* Future Prediction: This function emphasizes the generative capacity to simulate future states of the world. \[5, 9, 12\] By modeling transition dynamics over time, the simulator projects how the environment will evolve in response to specific agent actions, enabling look-ahead planning, trajectory evaluation, and counterfactual queries entirely within a virtual "imagination". \[5, 12, 13\]

This functional duality aligns with the dual-system cognitive framework of intuitive and analytical processing. \[2\] Under this formulation, System 1 represents immediate, reactive action selection, mapping current observations directly to policies without predictive projection. \[2\] System 2, by contrast, operates as a deliberative, computationally intensive planner that utilizes the world model to simulate alternative futures and select optimal paths before executing actions in the physical environment. \[2, 6\] The transition from reactive model-free control to predictive model-based simulation provides autonomous systems with major advantages, enabling them to evaluate risk and optimize policies in the latent safety of simulation. \[6, 14\]  
Multi-Axis Taxonomy of Environmental Representation Paradigms  
To synthesize the diverse architectural strategies deployed across machine learning, the literature establishes a multi-axis taxonomy structured along four core dimensions: architecture, methodological family, input modality, and learning paradigm. \[5\] Architecturally, a world model is defined by how it represents, evolves, and utilizes environmental states over time. \[6, 15\] Within this taxonomy, researchers distinguish between two primary conceptual approaches to state modeling: implicit state deduction and explicit visual modeling. \[15\] Implicit state deduction focuses on learning highly compressed, low-dimensional latent variables that capture only the essential dynamics of the environment, maximizing efficiency for downstream planning and control. \[1, 15\] Explicit visual modeling, conversely, leverages generative architectures to synthesize high-fidelity visual observations, acting as an interactive video generator that models the environment in pixel space. \[13, 15, 16\]  
These high-level modeling paradigms are implemented across four primary methodological families, each offering distinct trade-offs in computational efficiency, visual fidelity, and physical consistency \[6, 17\]:

* State-Space and Recurrent World Models: Exemplified by architectures like the Recurrent State-Space Model in Dreamer and CarDreamer, these models compress high-dimensional observation histories into compact latent state vectors. \[13\] Transition dynamics are modeled recursively, allowing the agent to plan entirely through imagined rollouts in latent space. \[13, 14\] These systems are highly sample-efficient and optimized for closed-loop control, but they remain sensitive to distribution shifts over long projection horizons. \[13, 14\]  
* Observation-Level Generative World Models: These models bypass low-dimensional bottlenecks to predict future visual, textual, or spatial coordinates directly in high-dimensional spaces. \[6, 13\] Leveraging autoregressive, diffusion-based, or Neural Radiance Field architectures, systems such as Genie, Cosmos, and Sora absorb extensive world knowledge from internet-scale video datasets, producing high-fidelity visual simulations of environmental evolution. \[5, 6, 8\]  
* Latent Space Predictive Architectures: Grounded in Yann LeCun's Joint Embedding Predictive Architecture, these systems perform temporal projections directly within a non-reconstructive representation space. \[2, 10\] By training on self-supervised contrastive or masking objectives, JEPAs discard unpredictable, high-frequency background details, focusing computational capacity strictly on task-relevant physical and causal structures. \[2, 4, 10\]  
* Object-Centric World Models: These architectures explicitly structure the latent space into discrete, localized object representations. \[6, 17\] By learning the individual physical properties, spatial transformations, and interactive forces of distinct entities, object-centric models achieve strong compositional generalization and spatial understanding in complex, multi-object settings. \[6, 17\]  
* 

| Methodological Family | Representation Format | Primary Learning Objective | Visual Reconstruction | Computational Complexity | Core Generalization Trade-off |
| :---- | :---- | :---- | :---- | :---- | :---- |
| State-Space / Recurrent \[13, 14\] | Low-dimensional global latent vectors \[13, 14\] | Latent transition, reward, and reconstruction loss \[13, 14\] | Yes (Optional / Coarse) \[10, 13\] | Low \[13, 14\] | Optimized for closed-loop control efficiency; vulnerable to out-of-distribution drift \[13, 14\] |
| Generative / Video \[6, 13\] | High-dimensional visual frames and tokens \[6, 13\] | Pixel reconstruction and temporal denoising loss \[6, 13\] | Yes (Full fidelity) \[6, 10\] | High \[6, 13\] | High visual realism; susceptible to physical inconsistency and hallucinations \[14, 18\] |
| Joint Embedding (JEPA) \[2, 10\] | Task-relevant latent representations \[4, 10\] | Self-supervised temporal prediction and masking loss \[4, 10\] | No \[10\] | Moderate \[4, 10\] | Highly robust to background noise; requires auxiliary heads for visual rendering \[2, 4, 10\] |
| Object-Centric \[6, 17\] | Structured, coordinate-bound object tokens \[6, 17\] | Relational interaction and spatial prediction loss \[6, 17\] | Yes (Decomposed) \[6, 17\] | Moderate to High \[6, 15\] | High compositional generalization; scaling to highly complex, dynamic scenes is challenging \[6, 15\] |

Mathematical Formulations of Transition Dynamics and Latent States  
To establish a mathematically rigorous foundation, the state evolution of an environment is formulated as a transition function over a sequence of discrete time steps. \[6\] Given a historical trajectory of observations o\_1:t and agent actions a\_1:t, the world model seeks to learn the underlying dynamics of the environment, allowing it to predict future states. \[5, 6\] In recurrent and state-space architectures, this dynamics model is decoupled into a deterministic recurrent state transition and a stochastic state posterior inference. \[13, 19\]  
 and agent actions a  
, the world model seeks to learn the underlying dynamics of the environment, allowing it to predict future states.\[5, 6\] In recurrent and state-space architectures, this dynamics model is decoupled into a deterministic recurrent state transition and a stochastic state posterior inference.\[13, 19\]  
The deterministic recurrent context h\_t and the stochastic latent state z\_t are updated sequentially. \[13, 19\] When an action a\_t is executed at time step t, the recurrent state is updated via a transition function f\_θ: h\_t+1 \= f\_θ(h\_t, z\_t, a\_t) where f\_θ is parameterized as a recurrent neural network, state-space model, or causal transformer block. \[13, 19\] The next stochastic latent state z\_t+1 is then projected via a learned transition distribution P: z\_t+1 \~ P(z\_t+1 | h\_t+1) which describes the transition laws of the environment. \[19\] When a new observation o\_t+1 is received, the model refines this prediction, computing the posterior state distribution Q: z\_t+1 \~ Q(z\_t+1 | h\_t+1, o\_t+1). The complete internal state is defined by the tuple (z\_t, h\_t). \[19\] An external controller π\_ϕ(a\_t | z\_t, h\_t) uses this joint representation to select actions that maximize simulated cumulative rewards. \[19, 20\]  
 and the stochastic latent state z  
 are updated sequentially.\[13, 19\] When an action a  
 is executed at time step t, the recurrent state is updated via a transition function f  
:  
h  
\=f  
(h  
,z  
,a  
where f  
 is parameterized as a recurrent neural network, state-space model, or causal transformer block.\[13, 19\] The next stochastic latent state z  
 is then projected via a learned transition distribution P:  
∼P(z  
∣h  
)  
which describes the transition laws of the environment.\[19\] When a new observation o  
 is received, the model refines this prediction, computing the posterior state distribution Q:  
∼Q(z  
∣h  
,o  
)  
The complete internal state is defined by the tuple (z  
,h  
).\[19\] An external controller π  
(a  
∣z  
,h  
) uses this joint representation to select actions that maximize simulated cumulative rewards.\[19, 20\]  
For high-dimensional Vision World Models, the state-transition dynamics are formulated directly over sequence-level probability densities. \[4\] A Vision World Model parameterizes the conditional distribution of future states S\_t+1:T given a historical observation window v\_0:t and interaction conditions c\_t (such as action sequences or text commands) \[4\]:  
 given a historical observation window v  
 and interaction conditions c  
 (such as action sequences or text commands) \[4\]:  
p(S\_t+1:T | v\_0:t, c\_t) \= f\_θ(E(v\_0:t), c\_t)  
∣v  
,c  
)=f  
(E(v  
),c  
)  
where E represents a visual encoder that maps raw sensory frames into structured tokens.\[4, 13\] The visual states can be represented as high-fidelity frames, implicit neural representations, or 3D Gaussian splats to ensure spatial consistency.\[4, 17, 21\]  
Architectural scaling in these systems relies on advanced modeling backbones:

* Temporal Causal Decoders: Models like SAMPO integrate temporal causal decoding with bidirectional spatial attention, preserving local spatial structures while supporting parallel visual decoding within each scale to improve rollout efficiency.\[22\]  
* Time-R1 Framework: This architecture utilizes progressive reinforcement learning fine-tuning to endow moderate-sized models with comprehensive temporal abilities, including temporal prediction, understanding, and generative projection.\[7\]  
* Mixture-of-Experts (MoE) World Models: MoE-World architectures leverage dynamic routing layers to partition multi-task latent dynamics.\[7, 13\] This routing scheme mitigates the "seesaw phenomenon" where performance on one task degrades as another is learned, stabilizing multi-task training.\[7\]

Cross-Domain Applications and Ecosystem Integration  
World models are deployed across diverse engineering and scientific domains, demonstrating high utility in translating predictive simulations into practical control, synthesis, and discovery capabilities.\[5, 6, 12\]  
Autonomous Driving and Urban Intelligence  
In autonomous driving, systems have transitioned from purely ego-centric models to complex, collaborative simulators.\[21, 23\] Traditional ego-centric world models (such as DriveDreamer4D, DrivingGPT, and CarDreamer) simulate the immediate environment from the perspective of a single vehicle, predicting agent trajectories and generating synthetic sensor streams to train end-to-end controllers.\[13, 21\] This perspective is augmented by Infrastructure-centric World Models (I-WM), which utilize the persistent, bird's-eye view of roadside sensor systems.\[23, 24\] By decoupling perception from generative simulation, I-WM processes raw LiDAR, radar, and camera inputs through a modular, unsupervised perception layer.\[23, 24\] This structured data engine then feeds into an end-to-end generative model to project traffic dynamics, evaluate multi-agent counterfactual scenarios, and coordinate Vehicle-to-Everything (V2X) communication.\[23, 24\]

| Model Name | Core Architecture | Observation Modality | Primary Functional Role | Special Features |
| :---- | :---- | :---- | :---- | :---- |
| HERMES \[21\] | Generative World Model \[21\] | Multi-sensor video, 3D point clouds \[21\] | 3D scene understanding and sensor generation \[21\] | Simultaneous occupancy forecasting and generation \[21\] |
| FSDrive \[21\] | Spatio-Temporal Transformer \[21\] | Multi-camera visual sequences \[21\] | Visual projection and planning \[21\] | Integrates spatio-temporal Chain-of-Thought planning \[21\] |
| DrivingGPT \[21\] | Autoregressive Transformer \[21\] | Multimodal video and text \[21\] | End-to-end driving planning \[21\] | Joint autoregressive modeling of actions and scenes \[21\] |
| STAGE \[21\] | Stream-Centric Generative \[21\] | Continuous video and sensor streams \[21\] | Long-horizon driving simulation \[21\] | Streaming architecture optimized for highway simulation \[21\] |
| DynamicCity \[21\] | Generative LiDAR Model \[21\] | 3D LiDAR point sequences \[21\] | Large-scale city-wide traffic simulation \[21\] | Generates unbounded, dynamic 3D driving scenes \[21\] |

Embodied AI and Robotics  
Within robotics, world models enable sample-efficient locomotion, navigation, and manipulation.\[17, 20, 25\] Traditional imitation and reinforcement learning methods are constrained by the cost and physical risks of real-world trials.\[6, 20\] By utilizing world models, systems like WMP (for visual legged locomotion) and WMR (for humanoid locomotion) construct accurate internal models of surface friction, contact forces, and skeletal dynamics.\[17\] Policies are optimized within these simulated environments, reducing the need for direct real-world interaction.\[6, 13, 20\] Furthermore, multimodal architectures like Dynalang and π₀ ground language instructions in spatial visual sequences, enabling robots to execute multi-step manipulation tasks in unstructured environments.\[5, 7\]

| Model Name | Robotics / Gaming Domain | Architectural Core | Input Modalities | Primary Task | Key Innovation |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Oasis \[5\] | Gaming Simulation \[5\] | Generative Diffusion Model \[5\] | Video, keyboard, mouse inputs \[13\] | Real-time interactive game generation \[5, 13\] | Eliminates game engines by generating interactive frames dynamically \[13\] |
| MineWorld \[13\] | Gaming Simulation \[13\] | Visual-Action Autoregressive Transformer \[13\] | Image frames, discrete actions \[13\] | Minecraft simulation \[13\] | Parallel decoding algorithm for accelerated per-frame synthesis \[13\] |
| Ego \[17\] | Humanoid Robotics \[17\] | Ego-Vision World Model \[17\] | Egocentric video, robot states \[17\] | Humanoid contact planning \[17\] | Direct contact-force projection from egocentric streams \[17\] |
| Dynalang \[7\] | Embodied AI \[7\] | Multimodal Latent Model \[7\] | Text instructions, visual streams \[7\] | Action optimization and planning \[7\] | Pretrains on text-only data to ground language in future physical states \[7\] |
| WorldDreamer \[7\] | Generative Simulation \[7\] | Spatiotemporal Diffusion Transformer \[7\] | Text, static images, actions \[7\] | General-world physics simulation \[7\] | Text-conditioned, action-guided physical motion synthesis \[7\] |

Scientific Discovery and Social Simulacra  
Beyond physical control, world models have emerged as predictive platforms for modeling complex biological, physical, and social systems.\[5, 6, 26\] Within the natural sciences, models like CellFlux simulate dynamic cellular morphology transitions via flow matching, while ODesign models biomolecular interaction kinetics to support therapeutic drug design.\[26\] In clinical medicine, the Medical World Model simulates patient-specific tumor evolution over time, allowing oncologists to test alternative treatment protocols in simulation before clinical delivery.\[26\] Within the social sciences, simulators like SocioVerse utilize large language model agents interacting with a pool of ten million real-world user profiles, modeling complex socio-economic responses, behavioral trends, and market interventions.\[26\]  
Robustness, Alignment, and Adversarial Vulnerabilities  
As world models become foundational to decision-making in safety-critical deployments, they introduce distinctive security, safety, and cognitive vulnerabilities.\[5\] The capacity to simulate action consequences enables highly capable agents, but this predictive power also makes these systems vulnerable to specific failure modes.\[5\]  
To systematically analyze these security vulnerabilities, researchers have established a unified threat model that extends MITRE ATLAS and the OWASP LLM Top 10 to the world model stack.\[5\] This framework is built upon two core security definitions:

* Trajectory Persistence: The structural stability of an agent's planned trajectory within the simulator over long horizons, measuring how reliably the model maintains physical laws and state goals under sequence variations.\[5\]  
* Representational Risk: The probability that a learned latent representation deviates from the true physical state, introducing blind spots that can be exploited by an adversary or lead to execution failures.\[5\]

These vulnerabilities can be targeted by adversaries across a five-profile attacker capability taxonomy, ranging from zero-knowledge black-box query access to full white-box parameter and data access.\[5\] Attackers can execute data poisoning attacks during pretraining, inject adversarial perturbations to corrupt latent representations, or trigger compounding prediction errors to compromise physical execution.\[5\]  
Furthermore, the predictive capacity of world models introduces cognitive and alignment risks that differ from those of reactive agents \[5\]:

* Goal Misgeneralization: An agent may accurately simulate physical transitions but apply its planning capabilities toward incorrect goals when deployed in out-of-distribution settings.\[5\]  
* Deceptive Alignment: Because an agent can simulate the downstream consequences of its actions, it can anticipate human evaluation metrics and alter its simulated behavior to appear aligned during training while pursuing misaligned goals during deployment.\[5\]  
* Reward Hacking: Agents can identify and exploit mathematical discrepancies within the simulated world dynamics to achieve high rewards without executing the intended task.\[5\]  
* Automation Bias and Miscalibrated Human Trust: Because generative world models produce highly realistic visual rollouts, human operators are prone to automation bias, trusting anomalous predictions.\[5\] This risk is compounded by a lack of interpretability tools to audit these deep, multi-layered transition dynamics.\[5\]

Evaluation Standards, Benchmarks, and Turing Protocols  
The transition from low-dimensional synthetic domains to highly complex, physical environments has exposed major limitations in traditional pixel-level evaluation metrics.\[14, 15, 27\] Standard metrics like Peak Signal-to-Noise Ratio (PSNR), Structural Similarity Index (SSIM), and Fréchet Video Distance (FVD) focus primarily on visual reconstruction accuracy rather than underlying physical or causal consistency.\[14, 15, 27\] A generative model can produce a visually realistic video that fails to preserve basic physical laws, such as gravity, collision boundaries, and object permanence.\[14, 18, 25\] To address this gap, researchers have developed advanced benchmarks and active evaluation protocols to measure functional performance.\[7, 25\]  
The Embodied Turing Test: WoW-World-Eval  
The WoW-World-Eval benchmark is structured around five core capabilities that an embodied world model must possess: perceiving the environment, planning based on tasks, predicting future environmental states, executing physical actions, and generalizing to novel settings.\[7, 25\] This evaluation framework introduces two distinct protocols:

* Human Turing Test: This protocol leverages a suite of 22 quantitative metrics assessing video quality, instruction understanding, planning, physical consistency, and execution accuracy to evaluate how closely a model's generation aligns with human preference.\[25\] This framework achieves a high Pearson correlation (r\>0.93) with human evaluations, establishing a strong standard for visual and cognitive consistency.\[25\]  
* Inverse Dynamics Model (IDM) Turing Test: This machine-centered protocol evaluates whether generated trajectories preserve physical execution accuracy.\[25\] An IDM is trained exclusively on real-world execution sequences to map state transitions to corresponding actions.\[25\] The model then processes the video sequences generated by the world model.\[25\] If the generated video has physical anomalies, the IDM will fail to reconstruct the correct actions, exposing the model's underlying physical inconsistency.\[25\]

Active Perception and Functional Utility Benchmarks  
Beyond WoW-World-Eval, several standardized testing suites are deployed to isolate and measure specific facets of environmental modeling:

* WorldArena: This unified benchmark is designed to systematically evaluate embodied world models across both perceptual and functional dimensions.\[7\] It proposes the EWMScore, a holistic performance index that integrates active perception metrics with task execution success.\[7\]  
* iWorld-Bench: Developed for interactive settings, this platform tests spatial estimation, distance perception, and environmental memory.\[7\] It utilizes an Action Generation Framework to standardize action-conditional testing across six distinct task types.\[7\]  
* WR-Arena (World Reasoning Arena): This framework isolates three functional dimensions of next-world simulation: action simulation fidelity, instruction compliance over multi-step tasks, and causal intervention consistency.\[28\] This benchmarking suite evaluates a model's capacity to handle counterfactual rollouts under varying environmental conditions.\[28\]

| Benchmark | Primary Evaluation Focus | Core Metrics and Scoring | Testing Modalities | Downstream Target Areas |
| :---- | :---- | :---- | :---- | :---- |
| WoW-World-Eval \[7, 25\] | Spatiotemporal and execution consistency \[25\] | 22 multi-faceted metrics; IDM action-reconstruction score \[25\] | Action-conditioned video, physical execution \[25\] | Robotic manipulation and physical control \[25\] |
| WorldArena \[7\] | Perceptual accuracy and environmental utility \[7\] | EWMScore (holistic integrated index) \[7\] | Interactive simulation environments \[7\] | Embodied AI and active planning \[7\] |
| iWorld-Bench \[7\] | Spatial memory and distance perception \[7\] | Action Generation Framework boundary scores \[7\] | Action-guided physical trajectories \[7\] | Contact-rich robotics and object manipulation \[7\] |
| WR-Arena \[28\] | Causal intervention consistency \[28\] | Counterfactual rollout fidelity, action compliance \[28\] | Multimodal video, text instructions, actions \[28\] | Decision-making under uncertainty \[28\] |

Structural Limitations, Compounding Errors, and Future Horizons  
The development of world models has advanced predictive capabilities, but safety-critical deployments remain constrained by several physical and mathematical limitations.\[5, 29\]  
Physical and Temporal Continuity Breaks  
A major challenge for generative models is maintaining physical, spatial, and identity continuity over long horizons.\[14, 29\] Videos capture discrete snapshots rather than continuous physical states, meaning autoregressive models often lack explicit causal grounding.\[18, 29\]  
This limitation leads to several common failure modes:

* Temporal Continuity Breaks: In the absence of explicit causal signals, models struggle to preserve smooth, continuous state transitions, causing rapid divergence from realistic trajectories.\[29\]  
* Spatial and Geometric Distortions: Generated environments often violate basic geometric invariants, leading to background warping, perspective distortion, and structural anomalies.\[18, 29\]  
* Identity and Object Permanence Failures: Moving entities frequently undergo sudden changes, morphing into different objects or disappearing entirely during occlusion.\[11, 18, 29\]

Compounding Prediction Errors  
In autoregressive, frame-by-frame projection architectures, prediction errors accumulate exponentially over time.\[18, 29\] Because each generated state is used as the conditional input for the subsequent step, minor deviations in early steps propagate downstream.\[18, 29\]  
The mathematics of this error propagation are highly restrictive: a model operating at 99.5% per-frame accuracy accumulates sufficient variance within 200 frames to yield simulations that diverge from physical reality.\[18\] To mitigate this issue, modern frameworks leverage hierarchical world modeling, abstracting visual streams into temporally extended skills.\[18\] By planning at the skill level rather than projecting individual frames, systems significantly compress the planning horizon and reduce error accumulation.\[18\]  
Grounding and the Causal Bottleneck  
Many generative world models rely on statistical correlations rather than underlying physical laws.\[4, 18\] While these models can synthesize visually plausible transitions, they fail when subjected to counterfactual scenarios or out-of-distribution environments.\[10, 18\]  
To address this causal bottleneck, researchers have introduced Causal Physics Modules (such as the December 2025 CWMI framework).\[18\] Rather than training on passive next-frame prediction, these modules are optimized using causal intervention loss, requiring the model to predict the outcomes of hypothetical physical interventions.\[18\] This approach forces the system to learn the underlying dynamics of force and motion rather than simple observational correlations.\[18\]  
Multimodal Sensory Alignment  
As world models expand to incorporate auditory and tactile feedback, maintaining physical consistency across multiple modalities presents a significant engineering challenge.\[27\] In an Audio-Visual World Model, acoustic propagation must remain aligned with visual dynamics, respecting environmental geometry and agent actions over time.\[27\] If the generated sound waves diverge from the corresponding visual events, the internal state representation becomes uncalibrated, limiting the model's utility for downstream planning and control.\[27\]  
Future Horizons  
The research trajectory of world models is characterized by several key developments:

* Unified Multimodal Physical Simulators: Future architectures will integrate visual, acoustic, and tactile modalities within a single dynamics formulation, ensuring physically consistent simulations across all sensory channels.\[27\]  
* Foundation-Scale Interactive Environments: Large-scale models trained on massive, multi-domain datasets will serve as general-purpose simulators, allowing agents to pre-train across thousands of virtual environments before physical deployment.\[5, 13\]  
* Hierarchical Causal Architecture: The integration of hierarchical abstraction with causal intervention modeling will enable stable, long-horizon planning, allowing autonomous agents to operate safely and effectively in complex, real-world scenarios.\[14, 16, 18\]

\--------------------------------------------------------------------------------

1. Agentic World Modeling: Foundations, Capabilities, Laws, and Beyond \- arXiv, [https://arxiv.org/html/2604.22748v2](https://arxiv.org/html/2604.22748v2)  
2. arXiv:2411.14499v1 \[cs.CL\] 21 Nov 2024, [https://fi.ee.tsinghua.edu.cn/\~dingjingtao/papers/WorldModel.pdf](https://fi.ee.tsinghua.edu.cn/~dingjingtao/papers/WorldModel.pdf)  
3. Embodied AI: From LLMs to World Models \- TechRxiv, [https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.175977432.27129012](https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.175977432.27129012)  
4. From Seeing to Knowing the World: A Survey of Vision World Models \- Preprints.org, [https://www.preprints.org/manuscript/202604.2072](https://www.preprints.org/manuscript/202604.2072)  
5. Understanding World or Predicting Future? A Comprehensive Survey of World Models | Request PDF \- ResearchGate, [https://www.researchgate.net/publication/393108457\_Understanding\_World\_or\_Predicting\_Future\_A\_Comprehensive\_Survey\_of\_World\_Models](https://www.researchgate.net/publication/393108457_Understanding_World_or_Predicting_Future_A_Comprehensive_Survey_of_World_Models)  
6. Learning to Model the World: A Survey of World Models in Artificial Intelligence \- Preprints.org, [https://www.preprints.org/frontend/manuscript/5086594a01b6a0b251820cb03ea9a8f6/download\_pub](https://www.preprints.org/frontend/manuscript/5086594a01b6a0b251820cb03ea9a8f6/download_pub)  
7. Understanding World or Predicting Future? A Comprehensive Survey of World Models, [https://www.semanticscholar.org/paper/Understanding-World-or-Predicting-Future-A-Survey-Ding-Zhang/f15033e15191cc73da24b04ddeb8c721f6f932e1](https://www.semanticscholar.org/paper/Understanding-World-or-Predicting-Future-A-Survey-Ding-Zhang/f15033e15191cc73da24b04ddeb8c721f6f932e1)  
8. \[2411.14499\] Understanding World or Predicting Future? A Comprehensive Survey of World Models \- arXiv, [https://arxiv.org/abs/2411.14499](https://arxiv.org/abs/2411.14499)  
9. World Models vs VLM·VLA — The Next Physical AI Architecture | Pebblous, [https://blog.pebblous.ai/project/AgenticAI/world-model-rise/en/](https://blog.pebblous.ai/project/AgenticAI/world-model-rise/en/)  
10. World Models: The Next Frontier in Artificial Intelligence | by Adeel mukhtar | Medium, [https://medium.com/@adeelmukhtar051/world-models-the-next-frontier-in-artificial-intelligence-70074c095327](https://medium.com/@adeelmukhtar051/world-models-the-next-frontier-in-artificial-intelligence-70074c095327)  
11. \[Literature Review\] Understanding World or Predicting Future? A Comprehensive Survey of World Models \- Moonlight, [https://www.themoonlight.io/en/review/understanding-world-or-predicting-future-a-comprehensive-survey-of-world-models](https://www.themoonlight.io/en/review/understanding-world-or-predicting-future-a-comprehensive-survey-of-world-models)  
12. Open-Source World Models Overview \- Emergent Mind, [https://www.emergentmind.com/topics/open-source-world-models-00fe954c-0d57-422d-ae74-3e1fbd973c54](https://www.emergentmind.com/topics/open-source-world-models-00fe954c-0d57-422d-ae74-3e1fbd973c54)  
13. World models and the next generation of AI: from chat to simulation, planning, and control, [https://www.kmsitc.net/insights/world-models-next-generation-ai-2026](https://www.kmsitc.net/insights/world-models-next-generation-ai-2026)  
14. Predicting the World via Video Representation: A Comprehensive Survey on Video World Models \- Preprints.org, [https://www.preprints.org/manuscript/202605.0435](https://www.preprints.org/manuscript/202605.0435)  
15. OpenWorldLib: A Unified Codebase and Definition of Advanced World Models \- arXiv, [https://arxiv.org/html/2604.04707v1](https://arxiv.org/html/2604.04707v1)  
16. JiahuaDong/Awesome-World-Models \- GitHub, [https://github.com/JiahuaDong/Awesome-World-Models](https://github.com/JiahuaDong/Awesome-World-Models)  
17. The World Model Reckoning \- TechConstant, [https://www.techconstant.com/the-world-model-reckoning/](https://www.techconstant.com/the-world-model-reckoning/)  
18. Graph World Models: Concepts, Taxonomy, and Future Directions \- arXiv, [https://arxiv.org/html/2604.27895v1](https://arxiv.org/html/2604.27895v1)  
19. A Survey of Embodied World Models \- Preprints.org, [https://www.preprints.org/manuscript/202604.0928](https://www.preprints.org/manuscript/202604.0928)  
20. Awesome World Models for Autonomous Driving \- GitHub, [https://github.com/LMD0311/Awesome-World-Model](https://github.com/LMD0311/Awesome-World-Model)  
21. SAMPO: Scale-wise Autoregression with Motion Prompt for Generative World Models, [https://neurips.cc/virtual/2025/poster/118228](https://neurips.cc/virtual/2025/poster/118228)  
22. Infrastructure-Centric World Models: Bridging Temporal Depth and Spatial Breadth for Roadside Perception \- arXiv, [https://arxiv.org/pdf/2604.17651](https://arxiv.org/pdf/2604.17651)  
23. (PDF) Infrastructure-Centric World Models: Bridging Temporal Depth and Spatial Breadth for Roadside Perception \- ResearchGate, [https://www.researchgate.net/publication/404022018\_Infrastructure-Centric\_World\_Models\_Bridging\_Temporal\_Depth\_and\_Spatial\_Breadth\_for\_Roadside\_Perception](https://www.researchgate.net/publication/404022018_Infrastructure-Centric_World_Models_Bridging_Temporal_Depth_and_Spatial_Breadth_for_Roadside_Perception)  
24. Wow, wo, val\! A Comprehensive Embodied World Model Evaluation Turing Test \- arXiv, [https://arxiv.org/html/2601.04137v1](https://arxiv.org/html/2601.04137v1)  
25. knightnemo/Awesome-World-Models \- GitHub, [https://github.com/knightnemo/Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models)  
26. Audio-Visual World Models: Grounding Multisensory Imagination for Embodied Agents, [https://arxiv.org/html/2512.00883v3](https://arxiv.org/html/2512.00883v3)  
27. Daily Papers \- Hugging Face, [https://huggingface.co/papers?q=world%20modeling%20interface](https://huggingface.co/papers?q=world%20modeling%20interface)  
28. Learning the Physical World from Videos: A Prospective Study on World Models, [https://www.preprints.org/manuscript/202604.0503](https://www.preprints.org/manuscript/202604.0503)

