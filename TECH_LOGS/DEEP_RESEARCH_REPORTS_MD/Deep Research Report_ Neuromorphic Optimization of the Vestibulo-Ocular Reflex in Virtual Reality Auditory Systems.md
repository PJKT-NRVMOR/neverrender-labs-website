**Neuromorphic Optimization of the Vestibulo-Ocular Reflex in Virtual Reality Auditory Systems**

Source guide  
This research explores how neuromorphic engineering can revolutionize virtual reality by mimicking the human vestibulo-ocular reflex, a biological system that perfectly stabilizes vision and sound during movement. By replacing traditional, power-hungry cameras with event-based sensors and spiking neural networks, the authors propose a framework that processes sensory data only when changes occur, dramatically reducing motion-to-photon latency and computational strain. The text details how integrating asynchronous head and eye tracking with personalized spatial audio creates a seamless, "world-locked" experience that aligns with our brain's natural expectations. Ultimately, this biologically inspired design aims to eliminate the sensory mismatches that cause cybersickness, paving the way for ultra-low-power, immersive wearable technology.

# **Biophysical Foundations and Population-Level Asynchrony**

To maintain a stable perception of the three-dimensional world during natural daily movements, the human nervous system relies on the vestibulo-ocular reflex.\[1, 2, 3\] The vestibulo-ocular reflex is a short-latency, high-fidelity ocular motor response that rotates the eyes in the exact opposite direction of head rotation at an identical velocity.\[2, 4, 5\] This automatic compensation stabilizes visual images on the central retina, preventing motion-induced blur and oscillopsia.\[2, 3\] This reflex is driven by a peripheral sensory apparatus, a central processing mechanism, and a motor output.\[2\] The peripheral sensory apparatus consists of the vestibular labyrinth in the inner ear, which houses three orthogonal semicircular canals to detect angular accelerations, and two otolith organs—the utricle and saccule—to detect linear accelerations and gravity-aligned orientation.\[2, 5\] Hair cells within these organs are embedded in a fluid and gelatinous structure called the ampulla, where they bend in response to fluid inertia.\[2\] This deflection modulates receptor potentials and determines the baseline firing rate of the primary vestibular nerve fibers in cranial nerve VIII.\[2, 5, 6\]  
Primary vestibular afferents project directly to second-order relay neurons within the medial vestibular nucleus, which resides in the brainstem pons and medulla.\[2, 6\] These medial vestibular nucleus neurons project through the medial longitudinal fasciculus to the motor nuclei of cranial nerves III, IV, and VI, which directly excite and inhibit the antagonistic extraocular muscle pairs of both eyes.\[2, 6, 7\] Because this trineuronal reflex arc bypasses complex cortical processing pathways, the vestibulo-ocular reflex operates with exceptional latency and remains accurate during head rotations at frequencies of up to 20 Hz.\[4, 6\]  
An electrophysiological paradox exists at the core of this biological system.\[4, 6\] Although the global behavioral reflex exhibits linear, high-fidelity characteristics up to 20 Hz, single medial vestibular nucleus neurons show highly nonlinear, distorted, and aliased responses to input signals above 10 to 12 Hz.\[4, 6\] This high-frequency fidelity is achieved not by the rate encoding of head velocity within single neurons, but rather by the integrated population response of asynchronously firing, intrinsically active neurons.\[4, 6\]  
Individual medial vestibular nucleus neurons possess heterogeneous baseline firing rates driven by independent, intrinsic pacemaker currents.\[4, 6\] Diffusive synaptic noise and these independent pacemaker currents synergistically prevent synchronization, maintaining a continuous, asynchronous, and spontaneous spiking regime across the neural population.\[4, 6\] This state of population-level asynchrony is modeled mathematically by defining the total input current I  
total,i  
​  
(t) injected into the i-th Leaky Integrate-and-Fire neuron within the medial vestibular nucleus:  
I  
total,i  
​  
(t)=I  
0  
​  
\+i(t)+P  
i  
​  
\+ϵ  
i  
​  
(t)  
where I  
0  
​  
 represents the steady baseline input from vestibular afferents during stationary states, i(t) represents the dynamic vestibular command driven by physical head velocity, P  
i  
​  
∼N(μ,σ  
2  
) is the independent, Gaussian-distributed intrinsic pacemaker current that introduces structural heterogeneity across the population, and ϵ  
i  
​  
(t) is the low-pass filtered, uncorrelated Gaussian diffusive synaptic noise simulated with a characteristic 2 ms time constant.\[6\] This synaptic noise is governed by:  
τ  
syn  
​  
dt  
dϵ  
i  
​  
(t)  
​  
\=−ϵ  
i  
​  
(t)+η  
i  
​  
(t)  
where τ  
syn  
​  
 is the synaptic integration time constant and η  
i  
​  
(t) is a white-noise process.\[6\]  
The high-frequency tracking performance of this neural control system is further enhanced by a reciprocal inhibitory commissural pathway.\[4, 6\] This pathway connects the contralateral medial vestibular nuclei via type II inhibitory interneurons, providing a mutual push-pull cancellation mechanism.\[6\] Commissural inhibition amplifies the effective sensitivity and time constant of the system, but it can only prevent harmonic distortions and phase-locking if the underlying population maintains its noisy, asynchronous firing state.\[4, 6\] In the absence of heterogeneous pacemaker currents and diffusive synaptic noise, the reciprocal inhibitory link induces periodic synchronization, limiting the linear bandwidth of the system and degrading tracking fidelity.\[4, 6\]  
Furthermore, non-physiological vestibular stimuli such as intense sound and vibration can evoke reflex ocular movements even in the absence of head displacement, a phenomenon known as a "sound-evoked VOR".\[8\] In patients with Superior Canal Dehiscence Syndrome, a brief, intense click of approximately 110 dB normalized hearing level delivered to the affected ear evokes vertical upward and contraversive torsional eye movements in the plane of the affected canal.\[8\] This pathway is monitored via the Ocular Vestibular Evoked Myogenic Potential, an excitatory potential recordable infraorbitally that begins at approximately 8 ms, exhibits a negative peak at 11 to 12 ms, and amplifies on upgaze, confirming that it represents an extraocular muscle response primarily involving the inferior oblique muscle.\[8\]  
The onset of this sound-evoked eye displacement coincides with the excitatory peak of the electromyographical response, demonstrating a short electromechanical delay of 2.3 to 5.4 ms.\[8\] This biological connection underscores the direct link between high-intensity acoustic inputs and immediate ocular motor responses, highlighting the need for precise auditory-vestibular alignment in virtual environments.\[8, 9\]

| Physiological System Component | Primary Sensory Organ / Pathway | Neural Nuclei / Central Processors | Motor / Effector Output | Functional Bandwidth / Latency | Pathological or Stress Consequences |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Rotational VOR \[5\] | Three orthogonal semicircular canals (angular acceleration) \[2, 5\] | Medial vestibular nucleus (MVN), pons/medulla \[2, 6\] | Extraocular eye muscles (recti and obliques) \[2, 7\] | Linear, accurate up to 20 Hz; latency \< 10 ms \[4, 6\] | Oscillopsia, nystagmus, blurred vision, dizziness \[2, 3, 10\] |
| Translational VOR \[5\] | Otolith organs: utricle and saccule (linear acceleration/gravity) \[2, 5\] | Medial longitudinal fasciculus, cranial nerves III, IV, VI \[2, 5\] | Direct projection to ocular motor nuclei \[2, 5\] | Synchronized linear displacement tracking \[5\] | Spatial disorientation, postural instability \[1, 5\] |
| Sound-Evoked VOR \[8\] | Labyrinth transduction via high-intensity acoustic clicks \[8\] | Vestibulocochlear nerve (VIII) to vestibular nuclear complex \[2, 8\] | Inferior oblique extraocular muscle (monitored via OVEMP) \[8\] | 2.3 to 5.4 ms electromechanical coupling delay \[8\] | Ocular nystagmus and myogenic potentials in SCDS \[2, 8\] |
| Vestibulospinal Reflex \[1\] | Semicircular canals and otolith organs \[2, 5\] | Vestibular nuclei projecting to the spinal cord \[2, 5\] | Skeletal muscles in neck, torso, arms, and legs \[1, 2\] | Core motor coordination for posture and balance \[1, 2\] | Postural collapses, frequent falls, and balance loss \[1, 2, 10\] |

\--------------------------------------------------------------------------------

# **Cerebellar Modulation and Adaptive Plasticity in Sensory Networks**

While the brainstem pathway provides the rapid, hardwired reflex arc for the vestibulo-ocular reflex, the cerebellum acts as a feedforward adaptive controller that calibrates reflex gain and phase.\[11, 12, 13\] The cerebellar flocculus, paraflocculus, nodulus, and uvula receive continuous sensory and motor signals.\[7, 11\] Purkinje cells within the flocculus receive high-frequency head velocity signals from vestibular mossy fibers via a network of granule cells and parallel fibers.\[7, 13\] Concurrently, Purkinje cells receive visual error signals, representing retinal slip, from climbing fibers that originate in the inferior olive.\[3, 7, 13\]  
Motor learning in the vestibulo-ocular reflex involves long-term depression and long-term potentiation of the parallel fiber-to-Purkinje cell synapses.\[12, 13\] This synaptic plasticity is guided by the temporal alignment of parallel fiber activity and climbing fiber inputs.\[11, 13\] When head rotation (vestibular parallel fiber input) is paired with persistent retinal movement (climbing fiber error signal), long-term depression is induced at the active parallel fiber-to-Purkinje cell synapses w  
PG  
​  
, decreasing the inhibitory output of Purkinje cells to the medial vestibular nucleus relay neurons.\[7, 11, 13\] Conversely, parallel fiber activation in the absence of climbing fiber inputs induces long-term potentiation, increasing the simple-spike inhibitory drive of Purkinje cells onto the brainstem relay center.\[13\]  
The phase and gain of this adaptively calibrated reflex are further modulated by feedforward inhibition from molecular layer interneurons.\[12, 13\] Molecular layer interneurons receive inputs from the parallel fibers and provide strong inhibitory inputs to Purkinje cells, regulating their firing window.\[12, 13\] Spiking neural network models demonstrate that this feedforward inhibitory pathway is critical for phase adaptation.\[12, 13\] By adjusting the local balance of direct parallel fiber excitation and delayed interneuron inhibition, the cerebellar cortex can shift the phase of Purkinje cell outputs relative to head velocity, allowing the vestibulo-ocular reflex to adapt to complex, frequency-dependent sensory conditions and achieve phase reversal during training.\[12, 13\]  
A major temporal challenge in biological learning is the physical latency of the sensory pathways.\[11\] Vestibular signals reach the cerebellar cortex within several milliseconds, whereas visual error signals from the retina experience a physical transmission delay of approximately 100 milliseconds.\[11\] For associative plasticity to occur, the Purkinje cell must correlate parallel fiber inputs with visual error signals across this 100-millisecond delay.\[11\]  
The cerebellum resolves this mismatch through a subcellular, biochemical "eligibility trace" within the Purkinje cell dendrites, rather than using neural delay lines.\[11\] Parallel fiber activation triggers a localized, transient biochemical cascade that tags the activated synapses, creating a window of eligibility.\[11\] If a climbing fiber input arrives within this window, the tagged synapses undergo long-term depression.\[11, 13\]

| Plasticity Pathway | Input Fiber Types | Target Cells | Direct Physiological Action | Biochemical / Computational Mechanism | Adaptive Behavioral Outcome |
| :---- | :---- | :---- | :---- | :---- | :---- |
| GC-to-PC LTD \[11, 13\] | Vestibular parallel fibers & climbing fibers \[7, 11\] | Purkinje cells (PCs) \[7, 13\] | Synaptic depression of active parallel fibers \[11, 13\] | Synaptic coactivation paired with eligibility trace \[11, 13\] | Decreases Purkinje simple-spike output, increasing VOR gain \[11, 13\] |
| GC-to-PC LTP \[13\] | Parallel fibers (climbing fiber inactive) \[13\] | Purkinje cells (PCs) \[13\] | Synaptic potentiation of parallel fibers \[13\] | Unpaired high-frequency parallel fiber stimulation \[13\] | Increases Purkinje simple-spike output, decreasing VOR gain \[13\] |
| Feedforward Inhibition \[12, 13\] | Parallel fibers to interneurons \[13\] | Purkinje cells (inhibited by INs) \[12, 13\] | Shunts parallel-fiber excitation on Purkinje cells \[12, 13\] | Indirect modulation of LTP/LTD balance \[12, 13\] | Controls phase shift, enabling complete phase reversal \[12, 13\] |
| Vestibular Nuclei Plasticity \[13\] | Mossy fibers to vestibular relay cells \[13\] | Medial vestibular nucleus (MVN) \[13\] | Secondary site of gain consolidation \[13\] | Long-term consolidation guided by Purkinje output \[13\] | Stabilizes learned reflex changes for permanent memory \[13\] |

This adaptive tuning is also influenced by environmental acoustic factors.\[9\] Experimental evaluations have demonstrated that speaker location (stationary versus moving) has a significant effect on the vestibulo-ocular reflex.\[9\] Specifically, an external moving speaker significantly lowers VOR gain, whereas an external stationary speaker significantly increases gain in both children and adults.\[9\]  
Furthermore, a positive correlation exists between spatial hearing abilities and VOR gain in adults: as the root-mean-square (RMS) localization error increases, the VOR gain increases as well.\[9\] This correlation indicates that the central nervous system dynamically balances visual, vestibular, and auditory spatial coordinate systems.\[9, 14\] This mechanism highlights the importance of incorporating head-tracked, dynamically updated auditory rendering within virtual environments to avoid artificial changes in VOR calibration.\[9, 15\]  
\--------------------------------------------------------------------------------

# **Neuromorphic Eye Tracking and Sparse Pupil Dynamics**

The human eye is characterized by rapid and abrupt movements, with angular velocities exceeding 300  
∘  
/s and accelerations reaching up to 24,000  
∘  
/s  
2  
.\[16, 17\] To capture these transient eye movements, tracking systems require sampling rates in the kilohertz range.\[17\] Traditional frame-based eye-tracking pipelines are constrained by latency, power consumption, and motion blur.\[18\] They typically introduce tracking delays of 45 to 81 milliseconds, which is insufficient for capturing rapid saccades and micro-saccades in real time.\[16, 17\]  
Furthermore, operating frame-based cameras at kilohertz rates consumes a large amount of power and generates high data bandwidth, which is impractical for wearable, battery-powered virtual reality headsets.\[17, 18\] These issues are addressed by neuromorphic Dynamic Vision Sensors and event-based cameras.\[16, 17\] These sensors asynchronously detect per-pixel changes in log-brightness at microsecond resolution, producing sparse data streams that encode dynamic scene information as independent events:  
e  
k  
​  
\=(x  
k  
​  
,y  
k  
​  
,p  
k  
​  
,t  
k  
​  
)  
where x  
k  
​  
 and y  
k  
​  
 are the array coordinates of the activated pixel, p  
k  
​  
∈{−1,+1} is the polarity representing a decrease or increase in local illumination, and t  
k  
​  
 is the microsecond-level timestamp.\[16, 17\]  
These sensors eliminate motion blur and operate with high dynamic ranges (\>120 dB), while requiring low sensing power (down to 2 mW active, and $16\\text{\\mu W}$ in standby).\[16\] By pulsing glint stimuli in binary patterns in the 1 to 2 kHz range, event cameras achieve a sampling time of 1 millisecond on glint updates.\[16\] This enables real-time foveated rendering, which dynamically allocates high-resolution processing to the 3-degree central foveal field of view, saving up to 50% to 70% in overall rendering compute.\[3, 16\]  
At the 2025 CVPR Event-Based Eye Tracking Challenge, advanced architectures were introduced to track the 2D coordinates of the pupil center from raw, sparse event streams.\[17\] The primary evaluation metric was updated from p-accuracy to precise Euclidean pixel error over the 3ET+ benchmark dataset, which contains recordings of eye movements across tasks like saccades, random pursuits, reading, and blinks annotated at 100 Hz.\[17\]  
The USTCEventGroup proposed the Bidirectional Relative Positional Attention Transformer (BRAT), which combines a convolutional spatial encoder with a temporal decoder using Bi-GRU and BRAT blocks to achieve a pixel error of 1.14 with 7.1 million parameters.\[17\] The EyeTracking@SMU team achieved a pixel error of 1.42 with 0.8 million parameters by applying post-processing techniques like Motion-Aware Median Filtering to enforce temporal smoothness, and Optical Flow-based local Refinement to align gaze predictions with dominant local event motion.\[17\]  
Additionally, the HKUSTGZ team achieved a pixel error of 1.50 using a 3D CNN to capture short-term temporal dynamics combined with a cascade of GRU and Mamba modules.\[17\] The CherryChums team achieved a pixel error of 1.61 by training an 0.8-million parameter model with a data augmentation pipeline incorporating temporal shifts, spatial flips, and event deletions to simulate real-world motion jitter and sensor dropouts.\[17, 19\]

| System or Team Pipeline | Model Size / Compute Cost | Spatial Representation Metric | Algorithmic Strategy | Latency & Hardware Target |
| :---- | :---- | :---- | :---- | :---- |
| PupilUNet Detector \[18\] | 0.177 M params / 0.553 GFLOPs \[18\] | Pupil boundary segmentation \[18\] | Truncated MobileNetV3 Small with Speed-Invariant Time Surfaces (SITS) \[18\] | ∼1 ms processing; integrated on Speck2f SoC \[18, 20\] |
| USTCEventGroup (Rank 1\) \[17\] | 7.1 M parameters \[17\] | 1.14 Euclidean pixel error \[17\] | Bidirectional Relative Positional Attention Transformer (BRAT) & Bi-GRU \[17\] | High-speed, feed-forward temporal prediction \[17\] |
| EyeTracking@SMU (Rank 2\) \[17\] | 0.8 M parameters \[17\] | 1.42 Euclidean pixel error \[17\] | Motion-Aware Median Filtering (M2F) & Optical Flow Refinement (OFE) \[17\] | Lightweight post-processing requiring no network retraining \[17\] |
| HKUSTGZ (Rank 3\) \[17\] | 3.0 M parameters \[17\] | 1.50 Euclidean pixel error \[17\] | 3D CNN for short-term and cascade GRU/Mamba for long-term dynamics \[17\] | Captures complex temporal dependencies in real time \[17\] |
| CherryChums (Rank 4\) \[17, 19\] | 0.8 M parameters \[17, 19\] | 1.61 Euclidean pixel error \[17, 19\] | Robust data augmentation (temporal shift, spatial flip, event deletion) \[17, 19\] | Optimizes model resilience against physical sensor dropout \[17, 19\] |

To implement these pipelines on low-power wearable platforms without relying on external computers, researchers have proposed fully integrated, real-time, on-device architectures.\[20\] This system integration is achieved by deploying a lightweight spiking neural network onto two Speck2f SoCs (one dedicated per eye).\[20\] This setup performs sparse asynchronous processing and interfaces with low-power microcontrollers to maintain always-on, real-time pupil tracking within a strict power budget.\[20\]  
For robust, high-frequency execution, this hardware setup is coupled with a dual-state processing framework.\[18\] This framework utilizes a lightweight, attention-augmented segmentation network (PupilUNet) to accurately localize the pupil boundary, achieving a P  
5  
​  
 accuracy of 96.3%.\[18\]  
Once a high-confidence pupil template is detected, the pipeline transitions to a rapid updating mode, employing a vectorized point-to-edge matching algorithm to track the pupil at kilo-Hertz frequencies with millisecond latency.\[18\] This dual-state control logic monitors tracking quality and reverts to the PupilUNet detector if tracking degrades, ensuring both speed and resilience.\[18\]  
\--------------------------------------------------------------------------------

# **Spatial Auditory Localization Cues and Neuromorphic Soundscapes**

To render spatialized sounds within a virtual reality headset, systems apply Head-Related Transfer Functions (HRTFs) that characterize how an acoustic signal from a point in space is filtered by the diffraction and reflection properties of the listener's head, pinnae, and torso.\[21, 22, 23\] Human spatial hearing relies on Interaural Time Differences (ITDs), which dominate at low frequencies between 270 Hz and 1.5 kHz, and Interaural Level Differences (ILDs), which dominate at mid-to-high frequencies above 1.5 kHz.\[22, 24\]  
Additionally, pinna-induced spectral notches resolve elevation and front-back ambiguity.\[22\] When non-individualized or generic HRTFs are used, users experience increased localization errors, elevated confusion over sound source positions, and diminished externalization.\[22, 23\]  
To make HRTF personalization practical at scale, researchers have proposed spatial upsampling and machine learning approaches.\[22, 25\] HRTFformer performs spatial upsampling by transforming low-resolution measurements into the spherical harmonics domain and utilizing an encoder-decoder transformer to extrapolate high-degree spherical harmonic coefficients.\[22\]  
Alternatively, personalized HRTFs can be individualised from anthropometric features automatically extracted from ear images.\[26, 27\] A Convolutional Neural Network (CNN) is trained on landmark datasets (such as I-BUG) to position 55 landmarks on ear images.\[27\] Twelve relevant landmarks are subsequently selected to calculate seven specific anthropometric distances in centimeters, which are matched against the HUTUBS database via Euclidean distance computation to select the closest matching HRTF profile.\[27\]  
                                 \[ Ear Image \]  
                                        │  
                                        ▼ (I-BUG CNN landmark model)  
                               \[ 55 Landmark Nodes \]  
                                        │  
                                        ▼ (Filter to 12 target nodes)  
                             
                                        │  
                                        ▼ (Euclidean distance matching)  
                             
                                        │  
                                        ▼  
                        

Biologically inspired sound localization can be implemented using Spiking Neural Networks (SNNs).\[24, 28\] In the mammalian brainstem, the Medial Superior Olive (MSO) receives bilateral excitatory inputs from the ears and acts as a coincidence detector.\[24\]  
Spiking neural models of the MSO utilize a graded delay structure trained via Spike-Timing-Dependent Plasticity (STDP).\[24, 29\] The network architecture converts audio signals into phase-locked spike trains using a digital cochlea model, which propagate along axonal delay lines.\[24, 29, 30\]  
When bilateral spikes arrive coincidentally at an MSO neuron, the neuron fires.\[24\] This active firing triggers STDP, modifying synaptic weights w  
ij  
​  
 based on the relative timing of pre- and post-synaptic action potentials:  
Δw=ηexp(−  
τ  
STDP  
​  
Δt  
​  
)  
where η is the learning rate and Δt=t  
post  
​  
−t  
pre  
​  
.\[13, 24\] After training, each output neuron becomes selective to a specific azimuth angle.\[29\]  
This model achieves localization accuracies of 70.63% under a ±5

∘  
 tolerance and 90.65% under a ±10  
∘  
 tolerance.\[29\] When the angular step size is refined to 2.5  
∘  
, the network’s accuracy improves to 78.64% (±5  
∘  
) and 91.82% (±10  
∘  
).\[29\]

| Spatial Processing Pipeline | Input Representations | Algorithmic Core | Hardware Platform | Spatial Resolution / Accuracy |
| :---- | :---- | :---- | :---- | :---- |
| DeepEar Sound Tracker \[31\] | Binaural microphone recordings, hand-crafted ILD/ITD \[31\] | Multisector neural network (SoundNet & DisNet) \[31\] | Real-time GPU/MCU \[31\] | High-accuracy simultaneous multi-source localization \[31\] |
| ART-rSNN Localizer \[28\] | Audio stream from dual omnidirectional microphones \[28\] | Reservoir SNN with Adaptive Resonance Theory \[28\] | Neuromorphic VLSI \[28, 32\] | Adaptive neuron placement near sound source \[28\] |
| Opus-SNN Compressor \[33\] | Distributed Acoustic Sensing (DAS) signals \[33\] | Opus-SNN Joint Compression, FFT & spectral energy \[33\] | Edge computing devices \[33\] | 50−80× data compression with \>98% classification accuracy \[33\] |
| MSO Spiking Model \[24\] | HRTF-filtered bandpass noise, cochlear spike trains \[24, 34\] | Graded delay lines with STDP learning rule \[24, 29\] | SpiNNaker platform / neuromorphic processors \[24, 35\] | 91.82% accuracy under a ±10 ∘  tolerance \[29\] |

For real-time applications, these pathways are integrated into hardware-efficient processors.\[28, 33, 35\] The DeepEar framework uses a multisector deep neural network to track multiple sound sources simultaneously, utilizing specialized sub-networks (SoundNet and DisNet) to classify arrival angles and source distances.\[31\]  
The Adaptive-Resonance-Theory-based Reservoir Spiking Neural Network (ART-rSNN) dynamically adjusts the locations of its reservoir neurons to amplify estimated acoustic energy near active sources, enhancing localization accuracy while reducing computational costs.\[28\]  
Additionally, the Opus-SNN Joint Compression Framework introduces a 50-to-80-fold reduction in audio data bandwidth, extracting spectral features using Fast Fourier Transforms (FFTs) to drive an event-driven SNN for real-time edge processing.\[33\]  
These neuromorphic spatializers process auditory pathways asynchronously, matching the low-power, event-driven constraints of wearable devices.\[35, 36\]  
\--------------------------------------------------------------------------------

# **Latency-Induced Cybersickness and Sensory Discordance**

In virtual and augmented reality systems, latency is a critical performance metric.\[15, 37, 38\] High Motion-to-Photon (MTP) latency—the delay between a user's physical movement and the update of corresponding light on the display—triggers sensory conflicts.\[37, 39\]  
The industry-accepted limit for comfortable virtual reality is an MTP latency of under 20 milliseconds, a threshold popularized by John Carmack.\[37, 38\] When latency exceeds 50 to 60 milliseconds, the delay becomes noticeable, causing visual instability.\[37\]  
For optical see-through augmented reality devices, the latency requirements are stricter, demanding latencies below 7 milliseconds (ideally under 5 milliseconds) to prevent virtual overlays from "swimming" or misregistering against the zero-latency physical background.\[37\]  
When these latency thresholds are violated, the visual system signals self-motion (vection), while the vestibular system detects no actual acceleration, creating a visual-vestibular mismatch.\[39, 40\] According to neural mismatch theory, this sensory conflict is interpreted by the central nervous system as a toxicity indicator, triggering cybersickness—a condition characterized by nausea, disorientation, general discomfort, and visual fatigue.\[39, 41\]  
To analyze this sickness, researchers generated Cybersickness Reference (CYRE) content consisting of 52 virtual reality scenes with varying motion profiles.\[41\] Sickness severity correlates with six biological features reflecting brain activity, measured using relative power spectral densities \[41\]:  
R  
2  
\>0.9for{Fp1 delta, Fp1 beta, Fp2 delta, Fp2 gamma, T4 delta, T4 beta}  
Furthermore, pupil dilation serves as a physiological biomarker of cybersickness severity, which can be measured during virtual reality sessions to predict cognitive and motor performance declines, such as impairments in visuospatial working memory and psychomotor skills.\[39\]  
These sensory mismatches extend to the auditory domain.\[15, 42\] In head-tracked spatial audio rendering, Motion-to-Sound (M2S) latency is the time delay between the initiation of head movement and the adaptation of the binaural cues in the headphone signal.\[15, 42\]  
If the Motion-to-Sound latency exceeds a detection threshold of 50 to 60 milliseconds, the acoustic scene fails to remain anchored in space.\[42, 43, 44\] Instead, the sound field briefly rotates with the listener's head before snapping back into place, collapsing the virtual acoustic space and breaking immersion.\[15, 43, 45\]  
       
                 │  
                 ├───────────────────────────────┐  
                 ▼ (Low Latency \< 30ms)          ▼ (High Latency \> 60ms)  
          
                 │                               │  
                 ▼                               ▼  
                    
                 │                               │  
                 ▼                               ▼  
        \[ Fully Immersive \]               \[ Gaze Anchor Collapses \]

Poorly processed or lagged audio also imposes a cognitive cost.\[46\] Acoustic technology evaluations demonstrate that the extra processing required for the brain to decode distorted or unaligned audio causes measurable stress, anxiety, and decreases in cognitive and physical performance.\[46\] This cognitive fatigue is a major factor in video-conferencing exhaustion.\[46\]  
By providing natural proximity orientation and spatial separation, spatial audio reduces the cognitive load required to deconstruct concurrent acoustic streams, mitigating stress and improving overall user well-being.\[46\]

| Brain Area / Metric | Physiological Channel | Specific EEG / Biometric Frequency | Correlation Coeff (R 2  or Error) | Cognitive / Emotional Consequence |
| :---- | :---- | :---- | :---- | :---- |
| Frontopolar Delta \[41\] | Electroencephalography (Fp1) \[41\] | Delta band waves (0.5−4 Hz) \[41\] | R 2 \>0.9 (combined) \[41\] | High correlation with acute nausea and general discomfort \[39, 41\] |
| Frontopolar Beta \[41\] | Electroencephalography (Fp1) \[41\] | Beta band waves (12−30 Hz) \[41\] | R 2 \>0.9 (combined) \[41\] | Correlates with elevated visual fatigue and eye strain \[39, 41\] |
| Temporal Gamma \[41\] | Electroencephalography (Fp2/T4) \[41\] | Gamma band waves (30−100 Hz) \[41\] | R 2 \>0.9 (combined) \[41\] | Reflected in disorientation, dizziness, and spinning sensations \[1, 41\] |
| Pupil Dilation \[39\] | Infra-red pupil tracking camera \[39\] | Direct pupillometry aperture variation \[39\] | Significant predictor value \[39\] | Predicts degradation in visuospatial working memory \[39\] |
| Facial EMG \[47\]  | Headset-embedded facial sensors \[47\] | Muscle micro-activation potentials \[47\] | Direct physical valence index \[47\] | Quantifies subjective pleasure and spatial audio immersion \[47\]  |

Measuring Motion-to-Sound latency requires precise testing equipment, such as a motorized Head and Torso Simulator (HATS).\[15\] During a measurement, the spatializer under test is mounted onto the motorized HATS, which is rotated in yaw at velocities matching human head movements (105  
∘  
/s to 185  
∘  
/s).\[15\]  
The HATS records the time instant t  
0  
​  
 when it passes 0  
∘  
 orientation, while simultaneously recording the binaural signals from its artificial ears.\[15\] These signals are analyzed in short, overlapping frames to compute Interaural Level Differences (ILDs) \[15\]:  
ILD(λ)=10log  
10  
​  
(  
∑  
l=0  
L−1  
​  
x  
l  
2  
​  
(Rλ+l)  
∑  
l=0  
L−1  
​  
x  
r  
2  
​  
(Rλ+l)  
​  
)dB  
where λ is the frame index, L is the frame length, and R is the frame advance.\[15\]  
The system detects the frame time t  
1  
​  
 where the ILD curve crosses 0 dB (representing the frontal 0  
∘  
 crossing of the virtual sound source).\[15\] The Motion-to-Sound latency is then calculated as \[15\]:  
t  
M2S  
​  
\=t  
1  
​  
−t  
0  
​  
This motorized approach ensures high reproducibility and sub-millisecond measurement resolution.\[15\]  
\--------------------------------------------------------------------------------

# **Synthetic Neuromorphic Integration and Egocentric Alignment**

To optimize spatial audio in virtual reality headsets, systems must synthesize head tracking, eye tracking, and auditory rendering into a low-latency, event-driven pipeline.\[36, 48, 49\]  
This integration can be achieved by combining event-based cameras, Lie-inertial head tracking, and spiking neural networks using Spherical World-Locking (SWL).\[14, 18, 50\] This framework is shown in the system-level workflow below.  
      \[ Physical Head Movement \]          \[ Physical Eye Movement \]  
                   │                                   │  
                   ▼                                   ▼  
                         
                   │                                   │  
                   ▼                                   ▼  
         \[ Lie Events on se(3) \]              
                   │                                   │  
                   ▼                                   ▼  
                      
           ( NDP on SE(3) )                       ( Speck2f SoC )  
                   │                                   │  
                   └─────────────────┬─────────────────┘  
                                     │ (Head Pose \+ Gaze Vectors)  
                                     ▼  
                       
                                     │  
                                     ▼  
                       
                            ( Auditory Slices )  
                                     │  
                                     ▼  
                     
                                     │  
                                     ▼  
                  

When a user initiates a head movement, raw IMU data is converted into Lie events.\[50, 51\] Lie events are sampled whenever the norm of the pre-integration change, mapped to the Lie algebra se(3) of the Special Euclidean group SE(3), exceeds a threshold.\[50, 51\]  
This level-crossing sampling generalizes 1D event-generation to 3D manifolds, utilizing normalized Lie polarities that encode analog displacement values.\[50, 51\] Generating Lie events canonicalizes the inertial data, reducing motion-induced variability and improving the accuracy of Neural Displacement Priors (NDPs).\[50, 51\]  
These neural priors produce denoised displacement measurements and associated uncertainties, which can be fused using standard filters to provide low-drift head tracking.\[50, 51\]  
Concurrently, event-based eye trackers capture the user's eye movements.\[16, 18\] This eye tracking is performed on-device using a dual-state spiking neural network (such as PupilUNet) deployed on two Speck2f SoCs, achieving pupil-center coordinates at kilohertz frequencies with millisecond latency.\[18, 20\]  
This integrated on-device processing minimizes the latencies associated with standard frame-based systems.\[17, 18, 20\]  
To align these sensory inputs, Spherical World-Locking (SWL) is applied as a general framework for egocentric scene representation.\[14\] SWL projects the multi-sensory streams onto a virtual sphere centered on the user.\[14\]  
By transforming the spatial audio and visual coordinates based on the Lie-inertial head tracking and pupil-center vectors, SWL stabilizes the egocentric representations relative to self-motion, mimicking the compensatory action of the biological vestibulo-ocular reflex.\[14\]  
This spherical representation avoids computationally expensive coordinate transformations or projections, preserving the spatial synchronization of the inputs.\[14\]  
This stabilized coordinate map directly drives a spiking neural network spatializer modeled after the Medial Superior Olive (MSO).\[24\] The SNN spatializer receives audio streams compressed via an Opus-SNN framework and converts them into phase-locked spike trains.\[24, 33\]  
The coordinate updates from the SWL framework dynamically adjust the synaptic delays of the MSO coincidence detectors in real-time.\[14, 32\] This dynamic adjustment shifts the active post-synaptic neural assemblies to align with the user's updated orientation, rendering spatialized binaural audio with sub-millisecond latency.\[32, 52\]

| Tracking Modality | Mathematical Framework | Sensor Hardware | Latency Profile | Power Profile | Operational Advantage |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Gaze Vector Tracking \[17, 18\] | Dual-state attention pupil segmentation \[18\] | Dynamic Vision Sensor (DVS / Speck2f SoC) \[16, 20\] | ∼1 ms processing delay \[18\] | \<2 mW active; $16\\text{ \\mu W}$ standby \[16, 20\] | Captures micro-saccades and high-speed eye dynamics without motion blur \[16\] |
| Head Pose Tracking \[50, 51\] | Lie algebra level-crossing on se(3) \[50, 51\] | Event-Based Inertial Measurement Unit (IMU) \[50\] | Sub-millisecond (event-driven) \[50\] | Ultra-low power edge consumption \[16, 36\] | Sampling-rate invariance, canonicalized sequences, and low drift \[50, 51\] |
| Auditory Spatialization \[24, 29\] | Graded delay coincidence with STDP learning \[24, 29\] | Spiking Neural Network Spatializer \[24, 28\] | Sub-millisecond computational latency \[24, 32\] | Event-driven sparse energy consumption \[28, 33\] | Dynamic soundscape counter-rotation with \>91% localization accuracy \[29, 43\]  |

This synthetic integration achieves two major operational advantages:

* Computational Efficiency through Spatiotemporal Sparsity: Traditional virtual reality pipelines require continuous high-frequency polling, consuming significant processing power during periods of static gaze or head position.\[17, 18, 37\] By using event-based sensors and spiking networks, the system operates asynchronously, executing computations only when sensory changes occur.\[16, 33\] This reduces active power consumption to the milliwatt range, making it suitable for lightweight, portable headsets.\[16, 17, 36\]  
* Temporal Coherence via Algorithmic Eligibility Traces: To align tracking cameras, inertial sensors, and audio hardware, which operate on differing transport latencies, the spiking spatializer utilizes decaying eligibility traces.\[11, 15, 37\] This biologically inspired delay compensation aligns asynchronous head, eye, and audio streams, keeping the Motion-to-Sound latency below 10 milliseconds.\[11, 15\]

\--------------------------------------------------------------------------------

# **Conclusions**

Integrating neuromorphic engineering principles into virtual reality headsets provides a pathway toward achieving low-power, biologically aligned immersion.\[36, 48, 49\]  
By mimicking the brainstem's population-asynchrony model and the cerebellar cortical learning pathways, virtual reality architectures can transition away from traditional, power-intensive frame-based tracking.\[4, 13, 18\]  
Combining Dynamic Vision Sensors, Lie-inertial event models, and spiking neural network auditory engines resolves the latency mismatches and sensory conflicts that trigger cybersickness.\[16, 24, 39, 50\]  
This synthetic optimization framework ensures that as a user interacts with a virtual environment, the auditory soundscapes remain anchored and perceptually seamless, matching the tracking performance of the biological vestibulo-ocular reflex.\[4, 43, 45\]  
\--------------------------------------------------------------------------------

* What Is the Vestibulo-Ocular Reflex? \- Cleveland Clinic, [https://my.clevelandclinic.org/health/articles/vestibulo-ocular-reflex](https://my.clevelandclinic.org/health/articles/vestibulo-ocular-reflex)  
* Neuroanatomy, Vestibulo-ocular Reflex \- StatPearls \- NCBI Bookshelf, [https://www.ncbi.nlm.nih.gov/books/NBK545297/](https://www.ncbi.nlm.nih.gov/books/NBK545297/)  
* Eye Tracking in Virtual Reality: a Broad Review of Applications and Challenges \- PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10449001/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10449001/)  
* Implications of noise and neural heterogeneity for vestibulo-ocular reflex fidelity \- PubMed, [https://pubmed.ncbi.nlm.nih.gov/18045014/](https://pubmed.ncbi.nlm.nih.gov/18045014/)  
* Three-Dimensional Vestibulo-Ocular Reflex in Humans: a Matter of Balance Janine Goumans, [https://repub.eur.nl/pub/19244/100414\_Goumans,%20Janine.pdf](https://repub.eur.nl/pub/19244/100414_Goumans,%20Janine.pdf)  
* Implications of noise and neural heterogeneity for vestibulo-ocular reflex fidelity \- SciSpace, [https://scispace.com/pdf/implications-of-noise-and-neural-heterogeneity-for-vestibulo-2541ghxsht.pdf](https://scispace.com/pdf/implications-of-noise-and-neural-heterogeneity-for-vestibulo-2541ghxsht.pdf)  
* Vestibulo-Ocular Reflex (VOR) Plasticity \- Encyclopedia.com, [https://www.encyclopedia.com/psychology/encyclopedias-almanacs-transcripts-and-maps/vestibulo-ocular-reflex-vor-plasticity](https://www.encyclopedia.com/psychology/encyclopedias-almanacs-transcripts-and-maps/vestibulo-ocular-reflex-vor-plasticity)  
* The human sound-evoked vestibulo-ocular reflex and its electromyographic correlate \- PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC2648610/](https://pmc.ncbi.nlm.nih.gov/articles/PMC2648610/)  
* Effect of Sound Source Location and Spatial Hearing on the Vestibulo-Ocular Reflex (VOR) \- UTHSC Digital Commons \- University of Tennessee Health Science Center, [https://dc.uthsc.edu/cgi/viewcontent.cgi?article=1545\&context=dissertations](https://dc.uthsc.edu/cgi/viewcontent.cgi?article=1545&context=dissertations)  
* Improving vertigo diagnostics with eye tracking & VR \- Tobii, [https://www.tobii.com/resource-center/customer-stories/vertigo-diagnostics-treatment-with-eye-tracking-vr](https://www.tobii.com/resource-center/customer-stories/vertigo-diagnostics-treatment-with-eye-tracking-vr)  
* Neural Learning Rules for the Vestibulo-Ocular Reflex \- PMC \- NIH, [https://pmc.ncbi.nlm.nih.gov/articles/PMC6793522/](https://pmc.ncbi.nlm.nih.gov/articles/PMC6793522/)  
* A Cerebellar Spiking Neural Model for Phase Reversal of Vestibulo-ocular Reflex \- PubMed, [https://pubmed.ncbi.nlm.nih.gov/30441731/](https://pubmed.ncbi.nlm.nih.gov/30441731/)  
* A Cerebellar Learning Model of Vestibulo-Ocular Reflex Adaptation in Wild-Type and Mutant Mice \- PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC6608186/](https://pmc.ncbi.nlm.nih.gov/articles/PMC6608186/)  
* Spherical World-Locking for Audio-Visual Localization in Egocentric Videos \- arXiv, [https://arxiv.org/html/2408.05364v1](https://arxiv.org/html/2408.05364v1)  
* Measuring Motion-to-Sound Latency with Motorized HATS, [https://pub.dega-akustik.de/DAS-DAGA\_2025/files/upload/paper/94.pdf](https://pub.dega-akustik.de/DAS-DAGA_2025/files/upload/paper/94.pdf)  
* Event-based Vision for Eye Tracking \- Prophesee, [https://www.prophesee.ai/event-based-vision-eye-tracking/](https://www.prophesee.ai/event-based-vision-eye-tracking/)  
* Event-Based Eye Tracking. 2025 Event-based ... \- CVF Open Access, [https://openaccess.thecvf.com/content/CVPR2025W/EventVision/papers/Chen\_Event-based\_eye\_tracking.\_Even-based\_Vision\_Workshop\_2025\_CVPRW\_2025\_paper.pdf](https://openaccess.thecvf.com/content/CVPR2025W/EventVision/papers/Chen_Event-based_eye_tracking._Even-based_Vision_Workshop_2025_CVPRW_2025_paper.pdf)  
* Efficient Eye Tracking Using Near-Eye Event Cameras: From Event-based Detection to Rapid Updates | TU Delft Repository, [https://repository.tudelft.nl/record/uuid:e96cc63d-6d2f-4d4d-a6b3-a114a04d3768](https://repository.tudelft.nl/record/uuid:e96cc63d-6d2f-4d4d-a6b3-a114a04d3768)  
* Dual-Path Enhancements in Event-Based Eye Tracking: Augmented Robustness and Adaptive Temporal Modeling \- CVPR 2026, [https://cvpr.thecvf.com/virtual/2025/35601](https://cvpr.thecvf.com/virtual/2025/35601)  
* Realizing Fully-Integrated, Low-Power, Event-Based Pupil Tracking with Neuromorphic Hardware \- arXiv, [https://arxiv.org/html/2511.20175v1](https://arxiv.org/html/2511.20175v1)  
* Head-related transfer function \- Wikipedia, [https://en.wikipedia.org/wiki/Head-related\_transfer\_function](https://en.wikipedia.org/wiki/Head-related_transfer_function)  
* HRTFformer: A Spatially-Aware Transformer for Individual HRTF Upsampling in Immersive Audio Rendering \- arXiv, [https://arxiv.org/html/2510.01891v2](https://arxiv.org/html/2510.01891v2)  
* Generic HRTFs May be Good Enough in Virtual Reality. Improving Source Localization through Cross-Modal Plasticity \- Frontiers, [https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2018.00021/full](https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2018.00021/full)  
* (PDF) A Spiking Neural Network Model of the Medial Superior Olive Using Spike Timing Dependent Plasticity for Sound Localization \- ResearchGate, [https://www.researchgate.net/publication/46037157\_A\_Spiking\_Neural\_Network\_Model\_of\_the\_Medial\_Superior\_Olive\_Using\_Spike\_Timing\_Dependent\_Plasticity\_for\_Sound\_Localization](https://www.researchgate.net/publication/46037157_A_Spiking_Neural_Network_Model_of_the_Medial_Superior_Olive_Using_Spike_Timing_Dependent_Plasticity_for_Sound_Localization)  
* Head-Related Transfer Function Personalization | NII Shoichi Koyama's Lab, [https://www.ap.nii.ac.jp/projects/hrtf\_indv/](https://www.ap.nii.ac.jp/projects/hrtf_indv/)  
* Assessing machine learning techniques for HRTF individualisation \- Sonicom, [https://www.sonicom.eu/assessing-machine-learning-techniques-for-hrtf-individualisation/](https://www.sonicom.eu/assessing-machine-learning-techniques-for-hrtf-individualisation/)  
* \[2311.13397\] Spatial Audio and Individualized HRTFs using a Convolutional Neural Network (CNN) \- arXiv, [https://arxiv.org/abs/2311.13397](https://arxiv.org/abs/2311.13397)  
* Dynamic- Structured Reservoir Spiking Neural Network in Sound Localization, [https://www.researchgate.net/publication/377859688\_Dynamic-\_Structured\_Reservoir\_Spiking\_Neural\_Network\_in\_Sound\_Localization](https://www.researchgate.net/publication/377859688_Dynamic-_Structured_Reservoir_Spiking_Neural_Network_in_Sound_Localization)  
* A Spiking Neural Network Model of the Medial Superior Olive Using Spike Timing Dependent Plasticity for Sound Localization \- PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC2928664/](https://pmc.ncbi.nlm.nih.gov/articles/PMC2928664/)  
* A human spiking computational model to explore sound localization \- bioRxiv, [https://www.biorxiv.org/content/10.1101/2025.09.18.677043.full](https://www.biorxiv.org/content/10.1101/2025.09.18.677043.full)  
* DeepEar: Sound Localization With Binaural Microphones \- IEEE Computer Society, [https://www.computer.org/csdl/journal/tm/2024/01/09954178/1InotKTCOis](https://www.computer.org/csdl/journal/tm/2024/01/09954178/1InotKTCOis)  
* A spiking neural network model of 3D perception for event-based neuromorphic stereo vision systems \- PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC5227683/](https://pmc.ncbi.nlm.nih.gov/articles/PMC5227683/)  
* Real-time vibration mode recognition of φ-OTDR based on Opus audio compression and spiking neural networks \- Optica Publishing Group, [https://opg.optica.org/oe/abstract.cfm?uri=oe-33-23-48199](https://opg.optica.org/oe/abstract.cfm?uri=oe-33-23-48199)  
* Neural System Model of Human Sound Localization, [http://papers.neurips.cc/paper/1734-neural-system-model-of-human-sound-localization.pdf](http://papers.neurips.cc/paper/1734-neural-system-model-of-human-sound-localization.pdf)  
* Neuromorphic Hardware: Processing Complex Speech Patterns At Scale \- PatSnap Eureka, [https://eureka.patsnap.com/report-neuromorphic-hardware-processing-complex-speech-patterns-at-scale](https://eureka.patsnap.com/report-neuromorphic-hardware-processing-complex-speech-patterns-at-scale)  
* Neuromorphic Chips For Augmented Reality: Low Latency ..., [https://eureka.patsnap.com/report-neuromorphic-chips-for-augmented-reality-low-latency-performance-analysis](https://eureka.patsnap.com/report-neuromorphic-chips-for-augmented-reality-low-latency-performance-analysis)  
* Motion-to-photon latency \- VR & AR Wiki \- Virtual Reality ..., [https://xinreality.com/wiki/Motion-to-photon\_latency](https://xinreality.com/wiki/Motion-to-photon_latency)  
* Latency in virtual and mixed reality explained \- Varjo Support, [https://support.varjo.com/hc/en-us/latency](https://support.varjo.com/hc/en-us/latency)  
* Cybersickness in Virtual Reality: The Role of Individual Differences, Its Effects on Cognitive Functions and Motor Skills, and Intensity Differences during and after Immersion \- MDPI, [https://www.mdpi.com/2813-2084/3/1/4](https://www.mdpi.com/2813-2084/3/1/4)  
* AI Book for Introduction to Virtual Reality (Course Code BME358B) For 3rd Semester, Second Year Mechanical Engineering VTU \- Wonderslate, [https://www.wonderslate.com/prompt/bookgpt?bookId=96188](https://www.wonderslate.com/prompt/bookgpt?bookId=96188)  
* Cybersickness and Its Severity Arising from Virtual Reality Content: A Comprehensive Study \- PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC8963115/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8963115/)  
* Measuring Motion-to-Sound Latency in Virtual Acoustic Rendering Systems \- ResearchGate, [https://www.researchgate.net/publication/371365559\_Measuring\_Motion-to-Sound\_Latency\_in\_Virtual\_Acoustic\_Rendering\_Systems](https://www.researchgate.net/publication/371365559_Measuring_Motion-to-Sound_Latency_in_Virtual_Acoustic_Rendering_Systems)  
* Head tracking \- Fora Soft, [https://www.forasoft.com/learn/audio-for-video/glossary/terms-audio/head-tracking](https://www.forasoft.com/learn/audio-for-video/glossary/terms-audio/head-tracking)  
* Measuring Motion-to-Sound Latency in Virtual Acoustic Rendering Systems \- acris, [https://acris.aalto.fi/ws/portalfiles/portal/136290259/2022\_latency-1.pdf](https://acris.aalto.fi/ws/portalfiles/portal/136290259/2022_latency-1.pdf)  
* Spatial Sound in VR \- Showtime VR, [https://showtimevr.eu/blog/spatial-sound-in-vr](https://showtimevr.eu/blog/spatial-sound-in-vr)  
* How Spatial Audio Helps our Brains Perceive Sound Differently \- AVIXA, [https://www.avixa.org/explore/articles/how-spatial-audio-helps-our-brains-perceive-sound-differently](https://www.avixa.org/explore/articles/how-spatial-audio-helps-our-brains-perceive-sound-differently)  
* “Did you hear that?”: Software-based spatial audio enhancements increase self-reported and physiological indices on auditory presence and affect in virtual reality \- Frontiers, [https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2025.1629908/full](https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2025.1629908/full)  
* \[2512.09969\] Neuromorphic Eye Tracking for Low-Latency Pupil Detection \- arXiv, [https://arxiv.org/abs/2512.09969](https://arxiv.org/abs/2512.09969)  
* Exploration of Event-Based Camera Data with Spiking Neural Networks, [https://trace.tennessee.edu/entities/publication/ae814737-6d4a-4641-81ba-23c9cf50a1f7](https://trace.tennessee.edu/entities/publication/ae814737-6d4a-4641-81ba-23c9cf50a1f7)  
* Neural Inertial Odometry from Lie Events \- arXiv, [https://arxiv.org/pdf/2505.09780](https://arxiv.org/pdf/2505.09780)  
* Neural Inertial Odometry from Lie Events \- arXiv, [https://arxiv.org/html/2505.09780v1](https://arxiv.org/html/2505.09780v1)  
* Spike-Timing-Based Computation in Sound Localization \- Research journals \- PLOS, [https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000993](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000993)

