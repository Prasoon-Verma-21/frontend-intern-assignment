# Frontend Developer Intern Assignment - Quiz Application

Hi there! 👋

This is my submission for the Frontend Developer Intern assignment. I really enjoyed working on this! My goal was to replicate the Figma design with pixel-perfect accuracy while ensuring the code remains clean, scalable, and easy to read.

## 🚀 Live Demo
You can check out the live application here:
**[Insert your Vercel/Netlify Link Here]**

## 🛠️ The Tech Stack
I chose this specific stack to meet the assignment requirements and ensure type safety:
* **Next.js (App Router):** For a robust and modern React framework.
* **TypeScript:** To prevent bugs and ensure strict data typing.
* **Tailwind CSS:** To achieve the specific styling and gradients required by the design.
* **Lucide React:** For the navigation icons.

## ✨ Key Features
* **Pixel-Perfect UI:** I paid close attention to details like the soft background gradients, card shadows, and specific font choices (Playfair Display & Inter) to match the screenshots exactly.
* **Interactive Animations:** I managed to extract the static "Cat Paw" asset from the design. To bring it to life without a heavy video file, I implemented a custom **Tailwind CSS keyframe animation** (`animate-float`) that makes the paw gently bounce, mimicking the original prototype.
* **Smart Feedback:** The app gives dynamic feedback. If you score 100%, you get a "Well Done!!" message; otherwise, it encourages you to "Keep Learning!"
* **Smooth UX:** The quiz handles question navigation, state management, and score calculation seamlessly without any page reloads.

## 🧠 My Approach & Assumptions
* **Asset Handling:** Since the original animated asset wasn't directly exportable as a video/GIF, I used the static image asset and wrote code to animate it. This trade-off provides the correct visual fidelity while keeping the site performance high.
* **Responsive Design:** The assignment requested a "Desktop" view, so I optimized the layout for larger screens. However, I used Flexbox to ensure the layout remains centered and unbreakable on smaller devices as well.
* **Data Structure:** The questions are currently stored in a constant array for simplicity, but the structure is designed to be easily swapped with an API call in the future.

## ⏱️ Time Spent
**Total Time: ~5 Hours**

* **1 Hour:** Initial project setup, configuring fonts, and fixing Tailwind configuration.
* **3 Hours:** Core development—building the components and fine-tuning the CSS to match the Figma design (gradients, spacing, shadows).
* **1 Hour:** Polishing the "Result" logic, implementing the custom paw animation, and writing this documentation.

## ⚙️ How to Run Locally
If you'd like to run the code on your machine:

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_GITHUB_REPO_URL]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the server:**
    ```bash
    npm run dev
    ```
4.  **Open in browser:**
    Navigate to `http://localhost:3000`

---