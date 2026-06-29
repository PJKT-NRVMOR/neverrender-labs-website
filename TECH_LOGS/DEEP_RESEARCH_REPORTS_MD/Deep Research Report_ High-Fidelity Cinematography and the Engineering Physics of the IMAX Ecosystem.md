# High-Fidelity Cinematography and the Engineering Physics of the IMAX Ecosystem

Source guide  
This technical overview explores the evolution and engineering of the IMAX ecosystem, detailing how a specialized novelty format became the pinnacle of high-fidelity cinematography. The text outlines the physics of 15/70mm analog film, highlighting its massive horizontal frame and the unique Rolling Loop transport system required to move heavy celluloid at high velocities. Beyond hardware, it examines the optical and compositional challenges filmmakers face, such as shallow depth of field and the need for center-framing to accommodate varying aspect ratios. Finally, the source addresses the integration of certified digital sensors, proprietary remastering techniques, and immersive 12-channel audio, all designed to achieve absolute audience immersion while maintaining visual and acoustic integrity.

The pursuit of absolute audience immersion has driven cinema technology through various mechanical, optical, and acoustical epochs. Among these, the premium large-format system originally developed by the Multiscreen Corporation—later renamed the IMAX Systems Corporation—stands as the pinnacle of high-fidelity cinematic engineering.\[1, 2\] Originally conceived as a special venue novelty for world expositions, the format has successfully transitioned into mainstream narrative blockbusters, fundamentally shifting how directors, cinematographers, and projection engineers approach their crafts.\[2, 3\] By expanding the visual field to occupy up to a 120  
∘  
 lateral and 80  
∘  
 vertical angle of view, the medium transcends traditional framing, turning the theatrical screen into an active cognitive space.\[2\] This document details the physical chemistry of the analog film stocks, the physical mechanics of custom camera and projection geometries, the mathematics of digital sensor certification, and the acoustic designs that define this ecosystem.\[1, 4, 5\]  
\--------------------------------------------------------------------------------

## Historical Genesis and the 15/70mm Celluloid Architecture

The technological origins of this format lie in Montreal’s EXPO 1967, where complex multi-projector and multi-screen film installations captured public attention.\[6\] Recognizing the mechanical instability of multi-projector setups, a team of Canadian filmmakers and entrepreneurs—Graeme Ferguson, Roman Kroitor, Robert Kerr, and William C. Shaw—sought to design a single, powerful projector capable of illuminating a giant screen.\[2, 6\] Under the newly formed Multiscreen Corporation, they designed a system utilizing a 15-perforation, 70 mm horizontal film run, a format colloquially designated as "15/70".\[1, 2, 4\]  
A fundamental distinction exists between the camera negative and the theatrical release print.\[2, 7\] Large-format analog cameras capture images on 65 mm original negative film, while release prints are printed on 70 mm print stock.\[2, 7\] Historically, as maintained by labs such as CFI in North Hollywood, this width difference accommodated the analog soundtrack.\[7\] The active visual frame occupies the center of the print, while the additional 2.5 mm margins on both the top and bottom edges of the 70 mm print contain multi-channel optical or magnetic soundtracks.\[7\] Although modern systems run separate digital audio, this legacy physical distinction remains the structural standard for print generation.\[7, 8\]  
Traditional widescreen formats, such as the Todd-AO system, transport 65 mm negative film vertically, utilizing 5 perforations per frame.\[1\] To bypass the physical height limits of vertical film transport, the horizontal method passes the film horizontally through both camera and projector, dedicating the maximum surface area of the celluloid to visual detail.\[1, 8\]  
In a vertical 5-perf 70 mm frame, the active image area measures 48.5 mm×22.1 mm.\[1\] By contrast, the horizontal 15-perf 70 mm frame yields dimensions of 69.60 mm×48.51 mm.\[2\] This increase produces an active image area nearly ten times larger than a standard vertical 35 mm (4-perf) frame and three times larger than vertical 5-perf 70 mm film.\[6, 8\]  
Because of this horizontal layout, the physical pitch per frame is significantly larger. The standard perforation pitch is 0.1870 inches, yielding 64.17 perforations per foot.\[7\] Consequently, 15-perf frames occur at a rate of:  
15 perfs/frame  
64.17 perfs/foot  
​  
≈4.278 frames per foot\[7\]  
Running at the standard cinematic frame rate of 24 frames per second, the physical transport velocity is:  
4.278 frames/foot  
24 frames/sec  
​  
≈5.61 feet per second(337 feet per minute / 102.7 meters per minute)\[1, 7\]  
This velocity is nearly three times faster than standard vertical 65 mm cameras (112 ft/min) and almost four times faster than 35 mm cameras (90 ft/min).\[1, 8\] This high velocity requires specialized, thick negative stocks and precise mechanical loops to prevent the physical tearing of the emulsion on set.\[1\]

| Film Format Specification | 35 mm Standard | 70 mm Todd-AO | 15/70 mm Large-Format |
| ----- | ----- | ----- | ----- |
| Transport Direction | Vertical | Vertical | Horizontal |
| Perforations per Frame | 4 | 5 | 15 |
| Aperture Dimensions | 21.95 mm×16.00 mm | 48.5 mm×22.1 mm | 69.60 mm×48.51 mm |
| Linear Velocity (24 fps) | 90 ft/min | 112 ft/min | 337 ft/min |

\--------------------------------------------------------------------------------

## The Physical Reality of Analog Production

Operating analog cameras within this horizontal framework introduces significant physical and logistical constraints.\[9\] A traditional analog camera, such as the IMAX MSM 9802, is massive, weighing 240 lbs (109 kg) compared to a standard 40-lb 35 mm camera.\[9\] This weight requires heavy-duty cranes, custom vehicle mounts, and complex tracking rigs.\[9\] Furthermore, a single spool of 15/70 negative film runs for only three minutes before needing a twenty-minute reload.\[9\] This introduces distinct pacing constraints on set, requiring extensive planning for each take.\[9\]  
The physical scale of the printed elements introduces similar challenges in the projection booth.\[8\] A single one-hour reel of printed horizontal 70 mm film weighs approximately 300 lbs (136 kg).\[8\] For feature-length blockbusters, a 68-inch reel holding just under three hours of footage weighs upwards of 600 lbs (272 kg).\[8\]  
This mass prevents the use of standard vertical projection platters.\[4, 9\] Instead, projection booths must utilize massive, heavy-duty horizontal rewind tables often described as the size of an apartment.\[8\]  
To handle these massive film strips, technicians rely on two main types of splicers:

* "Zigzag" Splicer: A temporary mechanism that fits the film ends together like puzzle pieces, allowing projectionists to quickly separate and reassemble reels for dailies.\[8\]  
* Straight Splicer: A permanent mechanism that practically welds the polyester base together to form the final presentation print.\[2, 8\]

In standard analog theaters, the physical film transport path is complex.\[8\] The film moves over specialized rollers 30 feet up into the ceiling to reach the second-floor projection booth.\[8\] After passing through the projector, the print travels another 30 feet down to a massive take-up reel on the ground floor.\[8\]  
For 3D analog presentations, this entire process is doubled, with two separate, parallel prints running through matching paths simultaneously to project separate left-eye and right-eye perspectives.\[8\]  
To manage this complexity, modern projection booths, such as the David Keighley Theater, utilize a rail-mounted system.\[8\] This allows technicians to slide the massive analog projectors out of alignment and replace them with dual digital laser projection units in under five minutes, enabling flexible scheduling between formats.\[8\]  
\--------------------------------------------------------------------------------

## The Mechanics of the Rolling Loop

The physics of moving a 600-lb reel of film through a projector at 337 ft/min required a complete redesign of traditional projection hardware.\[6, 8\] Traditional intermittent star-wheel (Geneva drive) mechanisms, which pull film downward via mechanical claws, tear 15-perf film apart due to the high mechanical stress.\[1, 6\]  
To solve this, Australian inventor Peter Ronald Wright Jones designed the "Rolling Loop" film transport system, which was subsequently purchased and refined by William Shaw and the Multiscreen Corporation.\[1, 6\]  
Rather than pulling the film tautly past the aperture, the Rolling Loop projector feeds the film horizontally in a smooth, wave-like motion.\[6\] The mechanical elements of this system must function in precise sync:

1. The Rotor: A large 37.5-inch diameter drum containing eight windows or gaps.\[6\] Each gap forms a physical wave or loop in the film as it moves past the input stage.\[6\]  
2. The Input Sprocket: Driven in sync with the rotor, this sprocket feeds exactly one frame (15 perforations) per rotor gap, positioning the film precisely so that cam pins can engage.\[6\]  
3. The Rotary Air Valve: This valve aligns with the rotor gaps, pulsing compressed air to guide and shape the physical film loop into the rotor gaps.\[6\]  
4. The Cam Unit: This mechanism oscillates the film-engaging claws at the margins of the film, slowing the film loop down as it approaches the aperture block.\[6\]  
5. Registration Pins: Once the loop has flattened, four fixed registration pins (one on each margin of the aperture) engage the perforations.\[6\] This keeps the film perfectly still during projection, minimizing gate weave and motion jitter.\[6\]  
6. The Lens Vacuum: During projection, the film frame is held firmly against the rear element of the projection lens by a powerful pneumatic vacuum.\[6\] This ensures absolute flatness across the 69.60 mm×48.51 mm frame, preventing focus drift across the large screen.\[2, 6, 9\]

To illuminate this massive frame, the projector requires immense luminous power.\[6, 9\] While standard screens utilize smaller, lower-wattage lamps, giant screens rely on a 15,000-watt water-cooled Xenon short-arc lamp (such as the Ushio UXW-15KD).\[6, 9, 10\]  
These lamps use water-cooled electrodes to manage the extreme thermal energy generated by input powers ranging from 10,000 W to 30,000 W.\[11\] This prevents the projector housing and the passing film base from melting.\[11\]  
Additionally, the rotary shutter is expanded to a 68% open angle, transmitting one-third more light than the traditional 50% shutters used in conventional cinema.\[6\]  
Specialized optics are also built for curved screen environments.\[4, 6\] In Dome and Omnimax theaters, the system utilizes highly distortion-corrected fisheye lenses.\[4, 9\]  
The optical center of the lens sits 9.4 mm above the film's horizontal center line.\[4\]  
The resulting image is projected elliptically onto dome screens (up to 27 m in diameter) constructed from perforated aluminum plates.\[6\] These plates have a 20% perforation density to allow backstage sound and ventilation.\[6\]  
This projection coverage extends 180  
∘  
 horizontally, 100  
∘  
 above, and 22  
∘  
 below the viewer's horizon, filling their entire visual field.\[6\]  
\--------------------------------------------------------------------------------

## Optical Physics and Compositional Mathematics

Capturing images on a sensor or film frame of this size introduces distinct optical constraints.\[12, 13\] Large-format cinematography exhibits a significantly shallower depth of field (DOF) compared to Super 35 formats at equivalent fields of view and apertures.\[12, 14\]  
When shooting with a 15/70 mm frame, the crop factor relative to standard 35 mm is roughly 0.37. This means a 50 mm lens on 15/70 mm acts as a wide-angle lens, while an 80 mm lens provides a normal, intimate perspective.\[12\]  
Through extensive trial and error on large-format film cameras (such as the IMAX MSM 9802 and MKIV Reflex), modern cinematographers have established that the "sweet spot" focal lengths for giant-screen cinematography are strictly between 50 mm and 80 mm.\[12, 15\]  
Lenses wider than 50 mm exhibit severe fishbowl distortion, where the edges of the frame fall off rapidly, disrupting the flat-plane geometry of the screen.\[12\]  
Conversely, focal lengths longer than 80 mm compress the background space, flattening the image and undermining the sense of depth.\[12\]  
Thus, the 50 mm lens acts as the primary wide lens, mimicking natural human peripheral vision, while the 80 mm lens functions as the ideal close-up lens, maintaining natural facial geometry.\[12\]  
This optical physics creates an demanding environment for focus pullers.\[12\] At wide apertures, such as the modified T1.4 fast Panavision Sphero 65 and System 65 lenses, the depth of field is measured in fractions of an inch.\[12\]  
Even a slight sway by an actor can throw the focus off.\[12\] On a giant screen, where a human face is projected up to five stories tall, any focus error is immediately obvious, which explains the occasional soft shots noticed by theatrical audiences.\[4, 12\]  
Specialized optics are also built to expand the visual scope of these cameras.\[12\] For example, a custom-built, waterproof snorkel lens was engineered for macro-cinematography on the film Oppenheimer.\[12\]  
This snorkel lens utilized a long, thin tube with a micro-objective at the tip, offering a deeper depth of field and allowing the camera to capture macro imagery of scientific models with deep focus.\[12\]  
This countered the shallow depth-of-field limitations of standard large-format lenses.\[12\]  
The dual existence of giant screens (with a native 1.43:1 aspect ratio) and standard digital screens (with a 1.90:1 or 2.39:1 Scope ratio) introduces compositional tension for modern cinematographers.\[1, 16\]  
Filmmakers must design frames that look balanced on a 1.43:1 screen while still working when cropped to 2.39:1 for standard theaters.\[17, 18\]  
This has led to the practice of "center-framing with protected margins".\[18, 19\] Cinematographers place key visual information in the central 2.39:1 zone of the viewfinder.\[19\]  
The remaining top and bottom regions of the 1.43:1 frame are treated as "peripheral buffer zones".\[18, 19\]  
These zones are kept clear of production equipment like boom microphones and lights, but do not contain vital story information.\[18, 19\]  
This compositional strategy relies on the audience's natural vision.\[18, 19\] In a giant-screen theater, the extra height fills the viewer's peripheral vision.\[18, 19\]  
The viewer's eyes naturally focus on the center of the screen, and the outer edges naturally defocus, enhancing the sense of immersion.\[18\]  
However, this creates issues when translated to home screens.\[18, 19\]  
When a native 1.43:1 frame is presented on a standard 16:9 home television, the peripheral buffer zones enter the viewer's primary visual focus.\[18, 19\]  
This can make close-ups feel overly loose, with too much empty headroom.\[18, 20\]  
This tension is illustrated by the different approaches of cinematographers like Roger Deakins and Greig Fraser:

* Roger Deakins (Blade Runner 2049): Deakins shot the film using the ARRI ALEXA Mini in Open Gate mode (1.55:1 aspect ratio), framing strictly for a final 2.39:1 Scope presentation.\[21, 22\] The expanded 1.90:1 version shown in digital theaters was a studio requirement rather than his primary artistic choice.\[22\] Deakins has noted that the standard 2.39:1 version remains the preferred cut, as it maintains his tight compositional intent.\[22, 23\]  
* Greig Fraser (Dune: Part Two): Unlike the first film, which used anamorphic lenses for its 2.39:1 scenes and spherical lenses for its 1.43:1 scenes, Fraser shot Dune: Part Two entirely with spherical lenses.\[24, 25\] This approach allowed them to present the entire film in expanded formats (1.90:1 and 1.43:1).\[26\] Fraser adjusted the composition on a shot-by-shot basis, framing some scenes wider in the standard release while using the full vertical scale for others.\[16\]

The debate surrounding "Liemax" venues highlights these formatting challenges.\[27, 28\] Standard, purpose-built theaters utilize the full 1.43:1 geometry, but retrofitted multiplexes employ a wider 1.90:1 screen.\[1, 27, 28\]  
If a director composes key narrative elements near the extreme vertical margins of a native 1.43:1 frame, projecting that film in a 1.90:1 digital theater requires cropping those elements out.\[18\]  
Consequently, cinematographers protect these margins, placing key details in the center to maintain visual balance across both theater types.\[18, 19\]  
\--------------------------------------------------------------------------------

## Digital Synthesis and DMR

To expand large-format screens beyond the limited network of 15/70 mm analog projection booths, the industry introduced digital alternatives.\[1, 4\] In 2008, the system expanded into standard multiplexes with dual-2K digital projection, followed by dual-4K Laser systems in 2014.\[1\]  
However, these digital systems do not match the 70-megapixel equivalent resolution of the 15/70 mm film frame.\[1\]  
To bridge this analog-to-digital gap, the company launched the "Filmed in IMAX" certification program in September 2020.\[4, 29\] This initiative certifies high-end digital cinema cameras that meet strict imaging metrics, ensuring their sensors can deliver the necessary detail for large-screen exhibition.\[29, 30\]

| Certified Camera | Sensor Dimensions | Native Resolution | Key Advantage |
| ----- | ----- | ----- | ----- |
| ARRI ALEXA 65 | 54.12 mm×25.59 mm | 6.5K | Massive sensor area |
| Sony VENICE 2 | 36 mm×24 mm | 8.6K | Dual-native ISO |

The Fujifilm GFX Eterna 55, with its 32.71 mm sensor height, is a key addition to this group.\[30\] By utilizing the full sensor height in Open Gate mode, filmmakers can record on a native 4:3 canvas that maximizes vertical scale.\[30\]  
This aligns with the tall, immersive aspect ratios of giant screens.\[30\]  
In digital large-format workflows, sensor crop mathematics play a critical role.\[26\] On Dune: Part Two, Greig Fraser utilized the ARRI ALEXA 65, which features a sensor capable of capturing an image approximately 6.5K×3K.\[25, 26\]  
However, formatting this wide digital sensor to fit a native 1.43:1 aspect ratio requires cropping the sides of the sensor.\[26\] This crop reduces the active image width to under 4.5K, highlighting the resolution trade-off between digital sensors and traditional 15/70 mm film.\[26\]  
For films not shot on certified large-format cameras, the company uses its proprietary Digital Media Remastering (DMR) process.\[4\]  
DMR is a mathematical format conversion process designed to prepare standard film or digital formats for giant screens.\[3, 4\]  
The process begins with a high-resolution scan of the source frame (often at 8K×6K resolution).\[3, 7\]  
Proprietary software then analyzes each frame, separating fine detail from the underlying grain structure.\[3, 32\]  
This allows the system to clean up visual noise and sharpen edges without introducing artifacts.\[3, 32\]  
Finally, the contrast and color gamut are adjusted to match the high brightness of dual-projection setups, transferring the final master onto 15/70 mm film or digital equivalents.\[3, 4\]

| Film Release | Source Format | Scan Res | DMR Hurdle |
| ----- | ----- | ----- | ----- |
| The Dark Knight | Mixed 35/70mm | 4K | Format transitions |

## Modern Digital Case Studies

Modern Digital Case Studies and Innovative Exposure Techniques  
Two recent films demonstrate the creative potential of these custom large-format systems:  
Dune: Part Two (Cinematography by Greig Fraser)  
Fraser made several key adjustments for Dune: Part Two compared to the first film.\[24, 25\]  
While the original film used anamorphic lenses for its standard scenes and spherical lenses for its expanded scenes, Fraser shot Dune: Part Two entirely with spherical lenses.\[24, 25\]  
He selected Soviet-era glass, rehoused 1980s Movicam lenses, and specialized primes from ARRI's HEROES collection to capture the vertical scale of the desert environment.\[26\]  
For the gladiatorial arena sequence on the planet Giedi Prime, Fraser wanted to capture the harsh, alien look of a black sun.\[26, 31\]  
To do this, he removed the internal infrared-cut filters from his ARRI ALEXA digital cameras.\[26\]  
He then placed a specialized filter in front of the lens that blocked nearly all visible light, allowing only near-infrared light to reach the sensor.\[26\]  
This unconventional spectrum photography rendered organic skin tones as smooth and pale, turned foliage ash-white, and gave the entire sequence a distinct, high-contrast monochrome aesthetic.\[26, 31\]  
Nope (Cinematography by Hoyte van Hoytema)  
To capture realistic night scenes in the desert, van Hoytema and director Jordan Peele bypassed traditional day-for-night coloring, which often suffers from overly bright skies and highlights.\[13, 33\]  
Instead, they built a custom dual-camera rig utilizing a stereoscopic 3D beam-splitter prism.\[33, 34\]  
The rig paired a 65 mm Panavision large-format film camera with an ARRI ALEXA 65 digital camera modified to capture infrared light.\[33, 34\]  
The Alexa 65's infrared footage captured inverted light values, turning the bright desert sky near-black.\[33\]  
In post-production, the detailed color values of the 65 mm film were combined with the dark sky values of the infrared footage.\[33\]  
This allowed the filmmakers to composite realistic, deep-shadow night scenes that maintained high detail in the landscape.\[33\]  
This hybrid digital-analog workflow highlights a significant shift from traditional film sets.\[17, 33\]  
During the production of analog-heavy projects such as Christopher Nolan's The Odyssey, the mechanical noise of legacy cameras required the construction of a heavy, soundproof "coffin" to prevent the camera's noise from ruining live dialog recording.\[12, 17\]  
This illustrates the engineering trade-offs between classic large-format cameras and modern digital systems.\[12, 17\]  
\--------------------------------------------------------------------------------

## Acoustical Architecture

To match the scale of the visual presentation, these theaters require highly engineered acoustic systems.\[5, 35\]  
Traditional theater audio encodes sound directly onto the film print.\[8\]  
However, to maximize the visual area of the celluloid, 15/70 mm film prints are completely silent.\[2, 8\]  
Instead, they use a synchronized double-system audio setup.\[1, 35\]  
Historically, sound was played back from 35 mm sprocketed magnetic film running at 90 ft/min.\[2, 35\]  
This was later updated to Digital Disc Playback (DDP), which uses optical discs synchronized to the projector via a rotary shaft encoder.\[8, 35\]  
Modern laser-projection auditoriums use a 12-channel immersive audio layout, while traditional analog setups typically run a 6-channel configuration.\[36\]  
The 12-channel system adds four overhead height speakers and two additional side wall channels to the standard layout.\[5, 37\]  
A key channel in both layouts is the top screen channel (Channel 6), often called the "Voice of God".\[35, 37\]  
Located above the center speaker behind the screen, this channel allows sound mixers to position audio elements vertically.\[35, 37\]  
This helps align sounds with the immense height of the visual frame, ensuring audio matches the action on screen.\[37\]  
The system's approach to low frequencies also differs from consumer standards like Dolby Atmos.\[5, 37\]  
Rather than relying on limited Low-Frequency Effects (LFE) channels, all channels in this system are full-range.\[37\]  
The system uses a 70 Hz crossover point to manage bass \[5\]:

1. All audio frequencies below 70 Hz are routed from the main channels.\[5\]  
2. This redirected bass is sent to a massive subwoofer array behind the screen.\[5, 35\]  
3. This setup often features up to eight high-power subwoofers (like the JBL 2245 H) driven by thousands of watts.\[35\]

This full-range bass management creates deep, physical low-end frequencies that audiences can feel, enhancing the realism of on-screen action.\[35\]

| Acoustic Component | Model | Frequency Range | Function |
| ----- | ----- | ----- | ----- |
| Sub-Bass Array | JBL 2245 H (x8) | 20 Hz−70 Hz | LFE and physical impact |

\--------------------------------------------------------------------------------

## The Next-Generation Camera

To address the physical limitations of legacy analog hardware, engineers developed the "Keighley" next-generation 65 mm film camera.\[17, 38\]  
While it retains the classic horizontal 15-perf mechanical movement, the surrounding body and systems have been completely redesigned.\[38\]  
This collaborative redesign by Kodak, Panavision, and FotoKem modernizes the analog workflow.\[1\]  
The heavy industrial alloys of previous generations are replaced with a multi-layer carbon fiber and titanium chassis.\[17, 38\]  
This structural change significantly reduces overall weight, allowing for handheld and Steadicam configurations that were previously impossible with 15/70 mm film cameras.\[17, 39\]  
Acoustically, the camera's body features vibration-dampening materials and optimized airflow, achieving a 30% reduction in operating noise.\[38, 39\]  
This allows directors to record live dialogue on set without using an external soundproof enclosure, preserving the performance's natural dynamics.\[17\]  
Additionally, the optical and data systems have been fully modernized.\[17, 38\]  
A brighter optical viewfinder designed by Panavision provides a clearer view for camera operators.\[38\]  
A new digital viewfinder can tap a 4K video feed, allowing the crew to stream live dailies directly to the cloud or on-set iPads.\[38\]  
The camera is also fully metadata-capable, embedding exposure, focal length, and lens details onto the SDI output.\[38\]  
This allows editing teams to view multiple aspect-ratio framing lines simultaneously, helping protect compositions for different release formats.\[17, 38\]  
These updates are supported by high-speed interfaces, including Gigabit Ethernet, USB-C, Wi-Fi, and Bluetooth, bridging analog detail with digital speed on set.\[38\]  
\--------------------------------------------------------------------------------

## Human Vision and Comfort

The immense scale of these screens can occasionally cause physical discomfort.\[1, 40\]  
Because the screen fills most of the viewer's peripheral vision, it can trigger strong sensations of movement.\[1, 2\]  
When the camera moves rapidly, the viewer's eyes register acceleration that their inner ear does not, creating a sensory conflict.\[40, 41\]  
This conflict can lead to eye strain, light-headedness, and motion sickness.\[40, 41\]  
This effect is often worsened by "judder".\[42\]  
At the standard frame rate of 24 frames per second, slow, sweeping camera pans can look jerky or strobed, especially on massive screens.\[42\]  
This occurs when standard displays repeat frames unevenly (such as during a 3:2 pulldown conversion) to match different refresh rates.\[42\]  
To minimize these issues, cinematographers must adjust their camera movements.\[42\]  
Keeping panning and tracking speeds well below standard thresholds prevents the strobing effect and ensures a more comfortable viewing experience on giant screens.\[42\]  
\--------------------------------------------------------------------------------

1. IMAX \- Wikipedia, [https://en.wikipedia.org/wiki/IMAX](https://en.wikipedia.org/wiki/IMAX)  
2. IMAX(1970–Present) \- FILM ATLAS, [https://www.filmatlas.com/entry/244](https://www.filmatlas.com/entry/244)  
3. Digital IMAX \- Thorburn Associates, [https://ta-inc.com/digital-imax/](https://ta-inc.com/digital-imax/)  
4. What Is IMAX? | No Film School, [https://nofilmschool.com/what-is-imax](https://nofilmschool.com/what-is-imax)  
5. Home Theater Week: Home Theater to the MAX \- Residential Systems, [https://www.residentialsystems.com/features/home-theater/home-theater-week-home-theater-to-the-max](https://www.residentialsystems.com/features/home-theater/home-theater-week-home-theater-to-the-max)  
6. The Basics of The Rolling Loop IMAX Projector \- In 70mm, [https://www.in70mm.com/presents/1970\_imax/library/projector/index.htm](https://www.in70mm.com/presents/1970_imax/library/projector/index.htm)  
7. IMAX 15perf-70mm Tech Specs \- Cinematography Mailing List, [https://www.cinematography.net/edited-pages/IMAX15perf\_70mmTechSpecs.htm](https://www.cinematography.net/edited-pages/IMAX15perf_70mmTechSpecs.htm)  
8. The Mind-Boggling Engineering Behind IMAX 15/70mm Projection ..., [https://nofilmschool.com/behind-imax-15-70mm-projection](https://nofilmschool.com/behind-imax-15-70mm-projection)  
9. How IMAX Works | HowStuffWorks \- Entertainment, [https://entertainment.howstuffworks.com/imax.htm](https://entertainment.howstuffworks.com/imax.htm)  
10. UXW-15KD Water-Cooled Xenon for IMAX® Theaters | Ushio America, Inc., [https://www.ushio.com/product/uxw-15kd-water-cooled-xenon-for-imax-theaters/](https://www.ushio.com/product/uxw-15kd-water-cooled-xenon-for-imax-theaters/)  
11. Xenon Short Arc Water Cooled Lamps \- Ushio Europe, [https://ushio.eu/xenon-lamps/xenon-short-arc-water-cooled](https://ushio.eu/xenon-lamps/xenon-short-arc-water-cooled)  
12. The Lenses Behind Oppenheimer: Modified Panavision and an IMAX Snorkel Lens \- Y.M.Cinema Magazine, [https://ymcinema.com/2023/07/25/the-lenses-behind-oppenheimer-modified-panavision-and-an-imax-snorkel-lens/](https://ymcinema.com/2023/07/25/the-lenses-behind-oppenheimer-modified-panavision-and-an-imax-snorkel-lens/)  
13. Jordan Peele's NOPE was entirely shot on 65mm film(5 perf and 15 perf/IMAX) \- Reddit, [https://www.reddit.com/r/cinematography/comments/w7mf16/jordan\_peeles\_nope\_was\_entirely\_shot\_on\_65mm/](https://www.reddit.com/r/cinematography/comments/w7mf16/jordan_peeles_nope_was_entirely_shot_on_65mm/)  
14. Rules of Shot Composition in Film: A Definitive Guide \- StudioBinder, [https://www.studiobinder.com/blog/rules-of-shot-composition-in-film/](https://www.studiobinder.com/blog/rules-of-shot-composition-in-film/)  
15. Hasselblad Lenses » ShotOnWhat? Movies & Television, [https://shotonwhat.com/lenses/hasselblad-lenses](https://shotonwhat.com/lenses/hasselblad-lenses)  
16. Dune \- Part Two IMAX comparison (1.43:1 and 1.90:1) \- Reddit, [https://www.reddit.com/r/imax/comments/1b0urvk/dune\_part\_two\_imax\_comparison\_1431\_and\_1901/](https://www.reddit.com/r/imax/comments/1b0urvk/dune_part_two_imax_comparison_1431_and_1901/)  
17. The Future of Film: A Guide to the Next-Generation IMAX Camera ..., [https://www.rmnstars.com/the-future-of-film-a-guide-to-the-next-generation-imax-camera-technology/](https://www.rmnstars.com/the-future-of-film-a-guide-to-the-next-generation-imax-camera-technology/)  
18. The problem with framing IMAX shots for multiple format deliveries \- Reddit, [https://www.reddit.com/r/imax/comments/19akbjr/the\_problem\_with\_framing\_imax\_shots\_for\_multiple/](https://www.reddit.com/r/imax/comments/19akbjr/the_problem_with_framing_imax_shots_for_multiple/)  
19. DUNE (2021) IMAX VS standard aspect ratio : r/cinematography \- Reddit, [https://www.reddit.com/r/cinematography/comments/1kxal4o/dune\_2021\_imax\_vs\_standard\_aspect\_ratio/](https://www.reddit.com/r/cinematography/comments/1kxal4o/dune_2021_imax_vs_standard_aspect_ratio/)  
20. Question about Modified Aspect Ratios \- Roger A. Deakins, [https://www.rogerdeakins.com/forums/topic/question-about-modified-aspect-ratios/](https://www.rogerdeakins.com/forums/topic/question-about-modified-aspect-ratios/)  
21. Blade Runner 2049 Side By Side the Original \- Visual Comparison : r/cinematography, [https://www.reddit.com/r/cinematography/comments/7qvata/blade\_runner\_2049\_side\_by\_side\_the\_original/](https://www.reddit.com/r/cinematography/comments/7qvata/blade_runner_2049_side_by_side_the_original/)  
22. Blade Runner 2049 IMAX version contains cropped frames to achieve the 1.90:1? \- Reddit, [https://www.reddit.com/r/bladerunner/comments/y9d6db/blade\_runner\_2049\_imax\_version\_contains\_cropped/](https://www.reddit.com/r/bladerunner/comments/y9d6db/blade_runner_2049_imax_version_contains_cropped/)  
23. Blade Runner 2049's Open Matte vs Standard release comparison. Not me, but of interest to subreddit. : r/bladerunner, [https://www.reddit.com/r/bladerunner/comments/10853s5/blade\_runner\_2049s\_open\_matte\_vs\_standard\_release/](https://www.reddit.com/r/bladerunner/comments/10853s5/blade_runner_2049s_open_matte_vs_standard_release/)  
24. Dune Part Two: IMAX Q\&A With Greig Fraser \- Y.M.Cinema Magazine, [https://ymcinema.com/2024/03/28/dune-part-two-imax-qa-with-greig-fraser/](https://ymcinema.com/2024/03/28/dune-part-two-imax-qa-with-greig-fraser/)  
25. Interview on "Dune: Part Two" with Greig Fraser ACS, ASC \- ARRI Rental, [https://www.arrirental.com/en/about/overview/news/interview-on-dune-part-two-with-greig-fraser-acs-asc](https://www.arrirental.com/en/about/overview/news/interview-on-dune-part-two-with-greig-fraser-acs-asc)  
26. The Cinematography of "Dune: Part Two" \- Frame.io Insider, [https://blog.frame.io/2024/04/15/the-cinematography-of-dune-2-part-two-greig-fraser/](https://blog.frame.io/2024/04/15/the-cinematography-of-dune-2-part-two-greig-fraser/)  
27. Every movie released in IMAX's RARE 1.43:1 Ratio | from: Frame Voyager \- Reddit, [https://www.reddit.com/r/imax/comments/1p9gqil/every\_movie\_released\_in\_imaxs\_rare\_1431\_ratio/](https://www.reddit.com/r/imax/comments/1p9gqil/every_movie_released_in_imaxs_rare_1431_ratio/)  
28. Explain aspect ratio numbers to me like I'm a moron please. : r/imax \- Reddit, [https://www.reddit.com/r/imax/comments/1jx7hrg/explain\_aspect\_ratio\_numbers\_to\_me\_like\_im\_a/](https://www.reddit.com/r/imax/comments/1jx7hrg/explain_aspect_ratio_numbers_to_me_like_im_a/)  
29. IMAX Launches New "Filmed In IMAX" Program With World's Leading Digital Camera Brands \- PR Newswire, [https://www.prnewswire.com/news-releases/imax-launches-new-filmed-in-imax-program-with-worlds-leading-digital-camera-brands-301133476.html](https://www.prnewswire.com/news-releases/imax-launches-new-filmed-in-imax-program-with-worlds-leading-digital-camera-brands-301133476.html)  
30. Tag Archives: Imax Certified Digital Cameras, [https://www.digitalcinemareport.com/tag/imax-certified-digital-cameras/](https://www.digitalcinemareport.com/tag/imax-certified-digital-cameras/)  
31. Interview on "Dune: Part Two" with Greig Fraser ACS, ASC. An interesting read on how they filmed this movie for IMAX. \- Reddit, [https://www.reddit.com/r/imax/comments/1b3z9ry/interview\_on\_dune\_part\_two\_with\_greig\_fraser\_acs/](https://www.reddit.com/r/imax/comments/1b3z9ry/interview_on_dune_part_two_with_greig_fraser_acs/)  
32. IMAX® 101 DMR \- YouTube, [https://www.youtube.com/watch?v=ylCDPszuar8](https://www.youtube.com/watch?v=ylCDPszuar8)  
33. How Jordan Peele's NOPE Delivered The Best Day For Night Shots ..., [https://noamkroll.com/how-jordan-peeles-nope-delivered-the-best-day-for-night-shots-in-cinema/](https://noamkroll.com/how-jordan-peeles-nope-delivered-the-best-day-for-night-shots-in-cinema/)  
34. What the Cameras and Cinematography of 'Nope' Can Teach You About Filmmaking, [https://nofilmschool.com/cameras-and-cinematography-nope-can-teach-you](https://nofilmschool.com/cameras-and-cinematography-nope-can-teach-you)  
35. Imax Sound System \- In 70mm, [https://www.in70mm.com/presents/1970\_imax/library/sound/index.htm](https://www.in70mm.com/presents/1970_imax/library/sound/index.htm)  
36. BFI IMAX TECH SPEC, [https://s3.eu-west-1.amazonaws.com/media.headbox.com/spaces/40224/documents/fb73609c-f152-4524-aca6-f47d42399785\_IMAX%20Tech%20Spec%202023.pdf](https://s3.eu-west-1.amazonaws.com/media.headbox.com/spaces/40224/documents/fb73609c-f152-4524-aca6-f47d42399785_IMAX%20Tech%20Spec%202023.pdf)  
37. IMAX and Dolby Atmos \- Reddit, [https://www.reddit.com/r/imax/comments/1aex0qw/imax\_and\_dolby\_atmos/](https://www.reddit.com/r/imax/comments/1aex0qw/imax_and_dolby_atmos/)  
38. IMAX Next-Gen 65mm Film Cameras: All Details \- Y.M.Cinema ..., [https://ymcinema.com/2024/05/04/imax-next-gen-65mm-film-cameras-all-details/](https://ymcinema.com/2024/05/04/imax-next-gen-65mm-film-cameras-all-details/)  
39. BREAKING: First Look at IMAX's Next-Gen 65mm Cameras on the Set of Christopher Nolan's The Odyssey \- Y.M.Cinema Magazine, [https://ymcinema.com/2025/11/17/imax-next-gen-camera-first-appearance-the-odyssey-set/](https://ymcinema.com/2025/11/17/imax-next-gen-camera-first-appearance-the-odyssey-set/)  
40. Instability of the perceived world while watching 3D stereoscopic imagery: A likely source of motion sickness symptoms \- PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC4441027/](https://pmc.ncbi.nlm.nih.gov/articles/PMC4441027/)  
41. \[Linked\] Camera Motion / Smoothing Triggers Motion Sickness \- Wicked Feedback, [https://forum.norestforthewicked.com/t/linked-camera-motion-smoothing-triggers-motion-sickness/21431](https://forum.norestforthewicked.com/t/linked-camera-motion-smoothing-triggers-motion-sickness/21431)  
42. What is Judder in Film: Causes, Effects, and Solutions \- AWOL Vision, [https://awolvision.com/blogs/awol-vision-blog/what-is-judder-in-film](https://awolvision.com/blogs/awol-vision-blog/what-is-judder-in-film)

