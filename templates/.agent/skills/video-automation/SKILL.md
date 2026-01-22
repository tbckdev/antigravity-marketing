---
name: video-automation
description: Automated video production using Remotion, covering all best practices from basics to advanced (3D, Charts, Captions).
allowed-tools: Read, RunCommand, Write
---

# Video Automation - The Full Remotion Suite

> This skill integrates the complete Remotion best practices with the Antigravity design system. It allows the agent to build production-grade video ads automatically.

---

## 1. Antigravity Core Aesthetics (The Look)

Always apply these tokens to the Remotion components:
- **Background**: `#0a0a0c`
- **Primary**: `#00f2ff` (Neon Cyan)
- **Secondary**: `#ff00e5` (Neon Pink)
- **Glass**: `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(10px)`
- **Fonts**: `Inter` or `Be Vietnam Pro` (Vietnamese Support)

---

## Usage Patterns (Agent Perspective)

### 1. High-Fidelity Landing Page Cloning
When a user provides a URL (e.g., LadiPage) and asks to "Clone it":
1. **Research Phase**: Use `browser_subagent` to extract:
   - Primary and Accent brand colors.
   - Hero images, service photos, and icons.
   - Text headlines and hierarchy.
2. **Implementation**: Use `interpolate`, `spring`, and `Sequence` to mirror the landing page sections into video scenes.
3. **Aspect Ratios**: Always offer both 16:9 (Facebook Feed) and 9:16 (TikTok/Reels) to maximize reach.

### 2. Antigravity Premium Styling (UI/UX Pro Max)
- **Glassmorphism**: Use `backdropFilter: 'blur(20px)'` with thin golden/neon borders.
- **Staggered Motion**: Map array indices and `frame` to small delays (`i * 10`) for fluid entry of elements.
- **Micro-animations**: Use `Math.sin(frame/10)` for pulsing CTA buttons or breathing backgrounds.

## Troubleshooting & Rendering

### FFmpeg Installation
Rendering requires FFmpeg. On macOS:
```bash
brew install ffmpeg
```

### Headless Chrome Error
If `remotion render` fails with a browser launch error:
1. Ensure Chrome is installed.
2. If using Remotion v4.x, ensure `remotion`, `@remotion/cli`, and `@remotion/renderer` are on the latest versions (e.g., `>= 4.0.400`) to support the new Headless Shell.
3. Pass the executable path if auto-detection fails:
```bash
npx remotion render <id> --browser-executable="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

### Performance Tip
Use `npx remotion preview` with different ports (`--port=300x`) to show multiple variations for comparison.

## 2. Comprehensive Module Rules (The Tech)

When building videos, refer to these specific implementation patterns:

### 🎬 Animations & Timing
- **Interpolate EVERYTHING**: Use `interpolate(frame, [0, 20], [0, 1])` for smooth entries.
- **Springs**: Use `spring({frame, fps})` for snappy UI elements like buttons or cards.
- **Sequencing**: Wrap logical scenes in `<Sequence from={...} duration={...}>` to keep the timeline manageable.

### 📝 Captions & Text
- **TikTok-Style**: Split text into arrays of 3-5 words. Use `display-captions` patterns.
- **Highlighting**: Change the color of the current word using the `Primary` neon color.
- **Typography**: Apply `text-shadow` for that glowing neon effect.

### 📊 Charts & Data (For /analyze)
- **Animated Bars**: Animate the `width` or `height` of bar charts using `interpolate`.
- **Line Charts**: Use SVG `stroke-dasharray` and `stroke-dashoffset` to "draw" the lines.

### 🌓 Transitions & Scenes
- **Slide/Fade**: Use `Transitions` patterns for moving between scenes.
- **Audio Overlap**: Ensure background music ducks slightly when voiceover or primary audio is playing.

### 📦 Assets & Media
- **Img/Video Components**: ALWAYS use Remotion's specialized components for frame-accuracy.
- **Lottie**: Use `@remotion/lottie` for complex vector animations (marketing icons, stickers).
- **Trimming**: Handle `startFrom` and `endAt` props correctly to sync external clips.

---

## 3. How to Use (For Non-Tech Users)

The workflow is designed to be **AI-First**. The user provides the intent, and I (the Agent) do the execution.

### Step 1: Brainstorming (The Prompt)
- **User**: "Tao muốn làm video ad TikTok cho campaign sale Tết, màu neon, có chữ nhảy kiểu TikTok."
- **Agent**: Dựa trên intent này, tao sẽ soạn kịch bản nháp (Storyboard) và chọn các rule phù hợp (Animations + Captions + Antigravity Style).

### Step 2: Implementation (The Code)
- Tao sẽ tự động tạo file `remotion/MyVideo.tsx`.
- Tao sẽ cấu hình `Composition` trong `remotion/Root.tsx`.

### Step 3: Simple Commands (The Interface)
Mầy chỉ cần quan tâm đúng 3 việc:
1.  **Preview**: `npx remotion preview` (Để xem thử trên browser).
2.  **Edit**: Nếu muốn đổi chữ, chỉ cần nói với tao "Đổi chữ A thành chữ B", tao sẽ tự sửa code.
3.  **Render**: `npx remotion render <id> out.mp4` (Để lấy file video cuối cùng).

---

## 4. Advanced Production Rules

- **3D Support**: Integrate `Three.js` (Three Fiber) for high-end product showcases.
- **Metadata**: Dynamically calculate duration based on audio length using `calculate-metadata`.
- **Fonts**: Load Google Fonts using `@remotion/google-fonts`.

---

> **Note**: This skill acts as my "Brain" for Video. You don't need to read 30 files, I have already "learned" them and will apply them when you request a video.
