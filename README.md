# NexRead Dashboard

NexRead is a lightweight e-library platform designed to provide users with a fast and distraction-free interface for browsing and accessing digital books. This repository contains the frontend dashboard built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- **Book Discovery**: Explore a vast collection of digital books across various genres.
- **Search Functionality**: Quickly find specific titles using the integrated search bar.
- **Detailed Book Views**: View comprehensive information including descriptions, authors, and cover images.
- **Integrated Reader**: Access and read books directly through a streamlined interface.
- **Responsive Design**: A fully responsive layout optimized for both desktop and mobile viewing.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
src/
├── app/              # Next.js App Router (Pages & Layouts)
├── components/       # Reusable UI components (Navbar, BookCard, etc.)
├── types/            # TypeScript interfaces and type definitions
public/               # Static assets (logos, icons)

```

## 🚦 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm (recommended), npm, or yarn

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/luckygoswami/nexread-dashboard
cd nexread-dashboard

```

2. **Install dependencies**:

```bash
pnpm install

```

3. **Environment Setup**:
   Create a `.env` file in the root directory based on `.env.example`:

```env
NEXT_PUBLIC_BACKEND_URL='your-backend-url'

```

4. **Run the development server**:

```bash
pnpm dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the results.

## 🏗️ Building for Production

To create an optimized production build:

```bash
pnpm build
pnpm start

```

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to enhance the functionality of NexRead.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or suggestions, feel free to open an issue on GitHub or contact me directly via [GitHub Issues](https://github.com/luckygoswami/nexread-dashboard/issues).
