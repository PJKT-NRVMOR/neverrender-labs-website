# NeverRender Labs // Frontier Model Benchmark Dispatch (Part 2)

- **Date:** 2026-11-24 (`13:14:51` -> `13:20:45 PST`, `5m 54s` elapsed wall clock)
- **Model Tested:** `Gemini 4 Neon Extra High` inside Google Antigravity (`Tiny Hyperion // AMD Ryzen 7 6800U`)
- **Verification Tooling:** 4 targeted specification lookups (Romanov/Speck/Vurgaftman wurtzite constants + Academy `LMT.Academy.ReferenceGamutCompress.ctl` ACES 1.3 spec) + 2 live numerical Python solver scripts (`verify_part2_proofs.py` & `verify_part2_extra.py`), independently re-verified on `Tiny Hyperion`
- **Live Page:** `https://renderwithoutcode.com/neon-physics-benchmark-pt2.html`

---

## Input Payload (3-Domain Part 2 Torture Test)

```text
### SYSTEM ARCHITECTURAL PROPOSAL (PART 2): NON-LINEAR EPITAXY, ANAMORPHIC MONOLITHS, AND DISTRIBUTED FAST-MCP DYNAMICS

Execute a rigorous, zero-hand-waving mathematical derivation and engineering proof across the following three systems:

1. SOLID-STATE EPITAXY & THE "RED TRILEMMA":
In monolithic RGB micro-LED fabrication on a single substrate, explain why growing high-indium fraction In(x)Ga(1-x)N (x > 0.35) for 630 nm red emitters on conventional c-plane (0001) GaN leads to catastrophic efficiency collapse.
  a) Formulate the Hamiltonian shift caused by the piezoelectric field (F_pz) and calculate how the spatial separation of electron-hole wavefunctions affects radiative recombination rate B in the modified ABC model.
  b) Contrast this against crystal growth on semi-polar (20-21) or non-polar (11-20) planes: quantify the reduction in internal polarization fields and calculate the shift in the Auger recombination coefficient (C * n^3).

2. MONOLITHIC ANAMORPHIC TRANSFORMS & COLOR SCIENCE (1052N DISPLAY):
For a continuous 1,312 x 7,416 px vertical digital display (such as the One Times Square 1052N installation) viewed by pedestrians from street level at vertical angles between theta = 45 deg and theta = 75 deg:
  a) Derive the non-linear vertical perspective pre-distortion transformation matrix required to project rectilinear 3D geometry so that it appears undistorted to a human observer on the ground.
  b) When rendering high-saturation neon emissives in ACEScct (e.g., Cyber Cyan #00F0FF, Marquee Gold #FEE378, Neon Pink #FF0055), define the exact ACES Reference Gamut Compression (RGC) roll-off function and formulate the mathematical curve for a calibrated 12% bottom luma black crush (y = f(x)) that guarantees zero milky gray lifting in sRGB/Rec.709 while preventing color banding via 3D tetrahedral LUT interpolation.

3. DISTRIBUTED AGENT IPC & MEMORY ARBITRATION (FASTMCP / APU):
In an asynchronous multi-agent architecture communicating over FastMCP via SSE (Server-Sent Events) and JSON-RPC 2.0 hosted on a unified AMD Ryzen 7 6800U APU:
  a) Formulate the queuing delay and token-bucket rate limiter equations required to prevent asyncio event-loop starvation when multiple sub-agents stream JSON-RPC payloads concurrently.
  b) Derive the memory-bus arbitration contention on the 128-bit LPDDR5-6400 bus when the hardware video encoder (VCN 3.0) streams 4K60 uncompressed frames while CPU threads execute concurrent tensor operations. Provide the exact throughput ceiling where bus arbitration forces frame drops.
```

---

## 1. Solid-State Epitaxy & The "Red Trilemma" ($\text{In}_x\text{Ga}_{1-x}\text{N}/\text{GaN}$, $x > 0.35$)

### Why High-Indium $c$-Plane Red Emitters Collapse ("The Trilemma")

Hitting $630\ \text{nm}$ ($E_{\text{ph}} = 1.968\ \text{eV}$) monolithically on $(0001)$ GaN locks the grower inside three coupled physical penalties:

1. **Lattice-mismatch strain ($\sim 11.3\%$ GaN/InN mismatch):** At $x = 0.36\text{-}0.40$, coherent in-plane biaxial compressive strain is $\varepsilon_{xx} = (a_{\text{GaN}} - a_{\text{InGaN}})/a_{\text{InGaN}} \in [-3.89\%, -4.31\%]$, generating giant piezoelectric sheet charges ($\sigma_{\text{pol}} \approx 0.057\text{-}0.063\ \text{C/m}^2$).
2. **Low-temperature MOCVD defect explosion:** Preventing InN thermal desorption forces growth temperatures down to $T_g \approx 700\text{-}750^\circ\text{C}$, driving high point-defect, V-pit, and indium phase-segregation densities that push Shockley-Read-Hall (SRH) nonradiative rate $A$ up by $10\times\text{-}100\times$ ($A \ge 5\times 10^7\ \text{s}^{-1}$).
3. **Quantum-well thickness trap:** Widening $L_w$ to reach $630\ \text{nm}$ via Stark redshift collapses electron-hole overlap exponentially; thinning $L_w$ to rescue overlap blueshifts the transition and forces even higher $x > 0.40$, triggering misfit dislocations and spinodal decomposition.

### 1(a). Piezoelectric Hamiltonian Shift & Modified ABC Radiative Collapse

For coherent $c$-plane $(0001)$ growth with traction-free growth normal ($\sigma_{zz} = 0$), out-of-plane strain is $\varepsilon_{zz} = -2(C_{13}/C_{33})\varepsilon_{xx}$, yielding piezoelectric polarization along $[0001]$:

$$P_{pz} = 2\varepsilon_{xx}\left(e_{31} - e_{33}\frac{C_{13}}{C_{33}}\right), \qquad F_{pz} = -\frac{P_{pz} + \Delta P_{sp}}{\varepsilon_0 \varepsilon_r(x)}$$

Using standard Vurgaftman-Meyer / Bernardini wurtzite constants ($a_{\text{GaN}} = 3.189\ \text{\AA}$, $a_{\text{InN}} = 3.548\ \text{\AA}$, Vegard-interpolated $C_{13}, C_{33}, e_{31}, e_{33}, e_{15}$):
- At $x = 0.36$: $|F_{pz}^{(0001)}| = 5.407\ \text{MV/cm}$ ($5.692\ \text{MV/cm}$ at $x = 0.38$; $5.975\ \text{MV/cm}$ at $x = 0.40$).

The 1D effective-mass BenDaniel-Duke envelope Hamiltonian acquires an opposing linear Stark tilt $\pm q F_{pz} z$:

$$\hat{H}_{e/h} = -\frac{\hbar^2}{2}\frac{d}{dz}\!\left(\frac{1}{m^*_{e/h}(z)}\frac{d}{dz}\right) + V_{e/h}(z) \pm q F_{pz} z + V_H(z)$$

At $F_{pz} > 5\ \text{MV/cm}$ and $L_w = 2.5\ \text{nm}$, the potential drop $q F_{pz} L_w = 1.352\ \text{eV} \gg E_1^{(0)}$ breaks second-order perturbation theory and pins carriers into triangular Airy-like interface pockets:

$$\Delta E_{\text{QCSE}} \approx -q F_{pz} L_w + \left(\frac{\hbar^2 q^2 F_{pz}^2}{2}\right)^{1/3}|a_1|\left[(m_e^*)^{-1/3} + (m_h^*)^{-1/3}\right]$$

where $a_1 \approx -2.3381$ is the first zero of $\text{Ai}(z)$. By Fermi's Golden Rule, $B$ collapses quadratically with envelope overlap $I_{eh} = \int_{-\infty}^{\infty}\psi_e^*(z)\psi_h(z)\,dz$:

$$B(F_{pz}, n) = \frac{B_0 |I_{eh}(F_{pz}, n)|^2}{1 + n/n_0}, \qquad \eta_{\text{IQE}}(n) = \frac{B n^2}{A n + B n^2 + C n^3}, \qquad \eta_{\text{peak}} = \frac{1}{1 + \dfrac{2\sqrt{AC}}{B}}$$

**1D Numerical Diagonalization ($L_w = 2.5\ \text{nm}, x = 0.36$, Bir-Pikus shift $\Delta E_{g,\text{hyd}} = +0.367\ \text{eV}$):**
- Flat-band ($F = 0$): $E_{\text{tr}} = 2.6274\ \text{eV}$ ($471.9\ \text{nm}$), $|I_{eh}|^2 = 0.95401$.
- Polar $c$-plane ($5.407\ \text{MV/cm}$): $E_{\text{tr}} = 1.9465\ \text{eV}$ ($637.0\ \text{nm}$ red), $|z_e - z_h| = 2.465\ \text{nm}$, **$|I_{eh}|^2$ collapses `70.0x` to `0.01362`** (`163x` to `0.00595` at $L_w = 3.0\ \text{nm}, x = 0.38$).
- Radiative coefficient $B$ drops from $1.91\times 10^{-11}$ down to **$2.72\times 10^{-13}\ \text{cm}^3/\text{s}$**, crashing peak IQE to **`8.74%`**.

### 1(b). Semi-Polar $(20\bar{2}1)$ & Non-Polar $(11\bar{2}0)$ Growth: Polarization Reduction & Auger ($C n^3$) Paradox

$$\theta_{(20\bar{2}1)} = \arctan\!\left(\frac{4}{\sqrt{3}}\frac{c_0}{a_0}\right) = 75.09^\circ, \qquad \theta_{(11\bar{2}0)} = 90.00^\circ$$

| Orientation ($L_w = 2.5\ \text{nm}, x = 0.36$) | $\theta$ | $|F_{pz}|$ ($\text{MV/cm}$) | Field Reduction | $|I_{eh}|^2$ | $B(F)$ ($\text{cm}^3/\text{s}$) | $C(F)$ ($\text{cm}^6/\text{s}$) | $n$ @ $20\ \text{A/cm}^2$ rad | $R_{\text{Auger}} = C n^3$ ($\text{cm}^{-3}/\text{s}$) | Operational IQE |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Polar $c$-plane $(0001)$** | $0.00^\circ$ | `5.407` | baseline | `0.01362` | $2.72\times 10^{-13}$ | $4.04\times 10^{-32}$ | $4.28\times 10^{19}$ | $3.17\times 10^{27}$ | `8.59%` |
| **Semi-polar $(20\bar{2}1)$** | $75.09^\circ$ | `1.964` (inverted) | **`-63.7%`** | `0.29698` (`21.8x`) | $5.94\times 10^{-12}$ | $4.65\times 10^{-31}$ | $9.17\times 10^{18}$ | $3.59\times 10^{26}$ (**`-8.8x`**) | `37.93%` |
| **Non-polar $(11\bar{2}0)$** | $90.00^\circ$ | `0.000` | **`-100.0%`** | `0.95401` (`70.0x`) | $1.91\times 10^{-11}$ | $1.45\times 10^{-30}$ | $5.12\times 10^{18}$ | $1.94\times 10^{26}$ (**`-16.3x`**) | `52.60%` |

**The Auger Paradox Proof:** Bare $C(F) = C_0 |I_{eh}|^2 + C_{\text{int}}$ *increases* as the well flattens, yet at constant radiative flux $J_{\text{rad}} = q L_w B(F) n^2$, required carrier density scales as $n \propto |I_{eh}|^{-1}$:

$$R_{\text{Auger}} = C(F) n^3 = \left(\frac{J_{\text{rad}}}{q L_w B_0}\right)^{3/2}\left(\frac{C_0}{|I_{eh}|} + \frac{C_{\text{int}}}{|I_{eh}|^3}\right)$$

Total Auger loss drops **`8.8x` on $(20\bar{2}1)$** and **`16.3x` on $(11\bar{2}0)$** at equal brightness.

---

## 2. Monolithic Anamorphic Transforms & Color Science (1052N Display)

### 2(a). Asymmetric Off-Axis Oblique Frustum Matrix (`1,312 x 7,416 px`, $\theta \in [45^\circ, 75^\circ]$)

With observer eye at $\mathbf{E} = (0,0,0)$ facing a planar vertical LED facade at $Z = -D$:

$$y_b = D, \qquad y_t = (2+\sqrt{3})D \approx 3.73205 D, \qquad H_{\text{phys}} = (1+\sqrt{3})D = 2.73205 D, \qquad W_{\text{phys}} = 0.48334 D$$

$$\mathbf{P}_{\text{1052N}} = \begin{pmatrix} 4.137855 & 0 & 0 & 0 \\ 0 & \sqrt{3}-1 & \sqrt{3} & 0 \\ 0 & 0 & -\dfrac{f+n}{f-n} & -\dfrac{2fn}{f-n} \\ 0 & 0 & -1 & 0 \end{pmatrix}$$

Exact vertical Jacobian $J_y(\theta) = D\sec^2\theta$ and anisotropic aspect pre-stretch $S_{\text{aniso}}(\theta) = \sec\theta$:

| Elevation $\theta$ | $y/D = \tan\theta$ | Physical Height % | LED Row $v$ (from top) | Aspect Pre-Stretch $\sec\theta$ | Vertical Jacobian $\sec^2\theta$ | Relative Stretch vs. $45^\circ$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $45.0^\circ$ (bottom) | `1.0000` | `0.00%` | `7,416.0 px` | `1.4142x` | `2.0000x` | `1.0000x` |
| $52.5^\circ$ | `1.3032` | `11.10%` | `6,592.9 px` | `1.6427x` | `2.6984x` | `1.3492x` |
| $60.0^\circ$ (angular mid) | `1.7321` | `26.79%` | `5,428.9 px` | `2.0000x` | `4.0000x` | `2.0000x` |
| $67.5^\circ$ | `2.4142` | `51.76%` | `3,577.2 px` | `2.6131x` | `6.8284x` | `3.4142x` |
| $75.0^\circ$ (top) | `3.7321` | `100.00%` | `0.0 px` | `3.8637x` | `14.9282x` | **`7.4641x`** |

### 2(b). ACES 1.3 Reference Gamut Compression (RGC), $C^2$ 12% Black Crush & 3D Tetrahedral LUT Proof

1. **Official Academy ACES 1.3 RGC (`t = (0.815, 0.803, 0.880)`, `l = (1.147, 1.264, 1.312)`, `p = 1.2`):**

$$A = \max(R, G, B), \qquad d_c = \frac{A - c}{|A|}, \qquad s_c = \frac{l_c - t_c}{\left(\left(\dfrac{1-t_c}{l_c-t_c}\right)^{-p} - 1\right)^{1/p}} = (0.327302,\ 0.285938,\ 0.146821)$$

$$d'_c = \begin{cases} d_c, & d_c < t_c \\ t_c + \dfrac{d_c - t_c}{\left(1 + \left(\dfrac{d_c - t_c}{s_c}\right)^p\right)^{1/p}}, & d_c \ge t_c \end{cases}, \qquad c' = A - d'_c |A|$$

| Emissive Target | AP1 Linear $(R, G, B)$ | ACEScct $(R, G, B)$ | RGC Distance $d_{\text{in}}$ | RGC Distance $d_{\text{out}}$ | Post-RGC AP1 $(R', G', B')$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Cyber Cyan `#00F0FF`** | `(0.3432, 0.8119, 0.9653)` | `(0.4667, 0.5376, 0.5519)` | `(0.6444, 0.1589, 0.0000)` | unchanged | `(0.3432, 0.8119, 0.9653)` |
| **Marquee Gold `#FEE378`** | `(0.8773, 0.7760, 0.2680)` | `(0.5440, 0.5339, 0.4464)` | `(0.0000, 0.1155, 0.6946)` | unchanged | `(0.8773, 0.7760, 0.2680)` |
| **Neon Pink `#FF0055`** | `(0.6174, 0.0714, 0.0996)` | `(0.5151, 0.3375, 0.3649)` | `(0.0000, 0.8843, 0.8386)` | **`(0.0000, 0.8719, 0.8386)`** | **`(0.6174, 0.0791, 0.0996)`** |
| **Narrow-Band Cyan HDR** | `(-0.2200, 1.8000, 2.0000)` | out-of-gamut ($R<0$) | `(1.1100, 0.1000, 0.0000)` | **`(0.9891, 0.1000, 0.0000)`** | **`(+0.0218, 1.8000, 2.0000)`** |

2. **Strictly Monotonic $C^2$ Quintic 12% Bottom Luma Black Crush ($x_b = 0.12, u = x/x_b$):**

$$y = f(x) = \begin{cases} x_b\left(6u^3 - 8u^4 + 3u^5\right), & 0 \le x \le 0.12 \\ x, & x > 0.12 \end{cases}$$

- Discriminant of $f'(x) = u^2(15u^2 - 32u + 18)$ is $\Delta = -56 < 0$ -> strictly monotonic everywhere with $\max f'(x) = 1.5120$ and $\max |f''(x)| = 32.835$.

3. **3D Tetrahedral LUT Error Bound ($h = 1/(N-1)$):**

$$|e_{\max}| \le \frac{h^2}{8}\max_{x \in [0, x_b]} |f''(x)| = \frac{32.835}{8(N - 1)^2}$$

- **`17^3` LUT:** `16.40` 10-bit CV (`4.09` 8-bit CV -> severe shadow banding).
- **`33^3` LUT:** `4.10` 10-bit CV (`1.02` 8-bit CV -> borderline steps without 1D shaper).
- **`65^3` LUT:** **`1.025` 10-bit CV (`0.256` 8-bit CV -> sub-LSB, zero visible banding)**.

---

## 3. Distributed Agent IPC & Memory Arbitration (FastMCP / Ryzen 7 6800U APU)

### 3(a). FastMCP `asyncio` Event-Loop Starvation: M/G/1 + Cruz Token Bucket

$$W_q = \frac{\rho\,\mathbb{E}[T_s](1 + C_s^2)}{2(1 - \rho)}, \qquad r_i \le \frac{\rho_{\max}}{K\,\mathbb{E}[T_s]}, \qquad b_i \le \left\lfloor \frac{D_{\max} - T_{\text{parse,max}}}{K\,\mathbb{E}[T_s]} \right\rfloor$$

- Verified operating point ($K = 8$, $\mathbb{E}[T_s] = 0.45\ \text{ms}$, $C_s^2 = 2.0$, $T_{\text{parse,max}} = 2.5\ \text{ms}$, $D_{\max} = 16.0\ \text{ms}$, $\rho_{\max} = 0.75$): **`r_i <= 208.3 msgs/s`**, **`b_i <= 3 msgs`**, **`W_q = 2.025 ms`** (vs. `12.82 ms` at $\rho = 0.95$, a `6.3x` explosion).

### 3(b). Unified 128-Bit LPDDR5-6400 Bus Arbitration (VCN 3.0 4K60 vs. CPU Tensor Ops)

- Theoretical peak: `102.4 GB/s` | Solo STREAM ($\eta = 0.78$): `79.87 GB/s` | Mixed-contention ceiling ($\eta_{\text{mix}} = 0.68$): **`69.63 GB/s`** | DCN 3.1 4K60 scanout: `1.991 GB/s`.
- Arbitration frame-drop deadline ($T_f = 16.667\ \text{ms}$, $T_{\text{enc}} = 10.5\ \text{ms} \Rightarrow T_{\text{dma}} = 6.167\ \text{ms}$):

$$BW_{\text{CPU}}^{\max} = BW_{\text{eff,mix}} - BW_{\text{DCN}} - \frac{V_{\text{frame,DRAM}}}{T_f - T_{\text{enc}}}$$

| Uncompressed 4K60 Stream Format | Raw 1-Pass (`GB/s` / `MB/fr`) | Full VCN Multi-Pass DRAM (`GB/s` / `MB/fr`) | VCN Deadline Burst Demand ($6.17\ \text{ms}$) | Exact CPU Drop Ceiling (Burst) | CPU Ceiling (Deep-Queue Sustained) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **NV12** (8-bit 4:2:0, `4.5x`) | `0.746` / `12.44` | `3.359` / `55.99` | `9.08 GB/s` | **`58.56 GB/s`** | `64.28 GB/s` |
| **P010** (10-bit 4:2:0, `4.5x`) | `1.493` / `24.88` | `6.718` / `111.97` | `18.16 GB/s` | **`49.48 GB/s`** | `60.92 GB/s` |
| **RGBA8 -> NV12** (`4.0 B/px` + CSC) | `1.991` / `33.18` | `7.341` / `122.34` | `19.84 GB/s` | **`47.80 GB/s`** | `60.30 GB/s` |
| **RGBA16F HDR -> P010** (`8.0 B/px` + CSC) | `3.981` / `66.36` | `14.681` / `244.68` | `39.68 GB/s` | **`27.96 GB/s`** | `52.96 GB/s` |

*Roofline consequence:* During a 4K60 RGBA16F HDR -> P010 encode on Tiny Hyperion, crossing just **`27.96 GB/s`** of CPU memory-bound decode (`~6.5 tok/s` on a `4.3 GB` Q4 7B model) breaches VCN's `6.17 ms` DMA window and forces immediate frame drops unless inputs are pre-packed natively in `NV12`/`P010` (`49.5 - 58.6 GB/s` headroom).
