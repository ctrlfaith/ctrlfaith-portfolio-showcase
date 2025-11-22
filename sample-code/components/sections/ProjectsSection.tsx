"use client";

import { FolderGit2, ExternalLink, Calendar, Pin } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { projectsMetadata } from "@/lib/projectsConfig";

type Props = { id?: string };

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  watchers_count: number;
}

interface EnrichedRepo extends GitHubRepo {
  metadata?: {
    repoName: string;
    customDescription?: string;
    highlights?: string[];
    techStack?: string[];
    category?: string;
    isShowcase?: boolean;
  };
}

export default function ProjectsSection({ id = "projects" }: Props) {
  const [repos, setRepos] = useState<EnrichedRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/ctrlfaith/repos?sort=updated&per_page=100"
        );
        if (!response.ok) throw new Error("Failed to fetch repositories");
        const data = await response.json();

        const customOrder = [
          "Greenplot-Manager-Showcase",
          "georgia-escape",
          "netflix-eda",
          "Idol-Management-System",
          "CSIT-NEXT-LARAVEL",
          "sales-dashboard-system",
          "hogwarts-db",
          "mobile_management_system",
        ];

        const enriched: EnrichedRepo[] = data
          .filter((repo: GitHubRepo) => !repo.name.includes("fork"))
          .filter((repo: GitHubRepo) => repo.name !== "ctrlfaith")
          .map((repo: GitHubRepo) => ({
            ...repo,
            metadata: projectsMetadata[repo.name],
          }))
          .sort((a: EnrichedRepo, b: EnrichedRepo) => {
            const indexA = customOrder.indexOf(a.name);
            const indexB = customOrder.indexOf(b.name);

            if (indexA !== -1 && indexB !== -1) {
              return indexA - indexB;
            }

            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;

            return (
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
            );
          });

        setRepos(enriched);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id={id} className="mt-24 scroll-mt-28">
      <div className="glass-apple px-8 md:px-12 py-10 md:py-12">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="min-w-0 flex-1 pr-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 shadow-inner shrink-0">
                <FolderGit2 size={16} className="opacity-70" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Projects
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed flex items-center flex-wrap gap-1">
              <span>A collection of my work from</span>
              <a
                href="https://github.com/ctrlfaith"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1.5 hover:underline"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
                <ExternalLink size={14} className="shrink-0" />
              </a>
              <span>— click to explore more</span>
            </p>
          </div>

          {/* Memoji */}
          <div className="hidden md:block shrink-0">
            <div className="relative">
              <div className="memoji-wrap w-28! h-28!">
                <Image
                  src="/memoji/memoji-laptop1.png"
                  alt="memoji-laptop1"
                  width={112}
                  height={112}
                  className="memoji-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="space-y-4 text-center">
              <div className="inline-flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-slate-200 border-t-blue-600" />
              <p className="text-slate-600 text-sm">Loading projects...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6 text-center">
            <p className="text-red-600 font-medium">Failed to load projects</p>
            <p className="text-red-500 text-sm mt-2">{error}</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <>
            <div className="grid gap-5 md:grid-cols-2 w-full">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>

            {repos.length === 0 && (
              <div className="text-center py-16 text-slate-500">
                <FolderGit2 size={48} className="mx-auto mb-4 opacity-30" />
                <p>No repositories found</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

function RepoCard({ repo }: { repo: EnrichedRepo }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const description = repo.metadata?.customDescription || repo.description;
  const isShowcase = repo.metadata?.isShowcase;
  const isPinned =
    repo.name === "Greenplot-Manager-Showcase" ||
    repo.name === "georgia-escape";

  return (
    <div className="group rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 relative w-full max-w-full overflow-visible">
      {/* Pinned Badge */}
      {isPinned && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-md">
            <Pin size={12} className="fill-white" />
            Pinned
          </div>
        </div>
      )}

      {/* Card Header */}
      <div className="flex items-start gap-3 mb-4 w-full max-w-full">
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-inner">
          <FolderGit2 size={18} className="opacity-70" />
        </div>
        <div className="min-w-0 flex-1 pr-10">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors wrap-break-word break-all">
              {repo.name}
            </h3>
            {isShowcase && (
              <span className="repo-badge-glass badge-showcase shrink-0">
                Showcase
              </span>
            )}
            {repo.metadata?.category && (
              <span className="repo-badge-glass badge-category shrink-0">
                {repo.metadata.category}
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-slate-600 mt-2 leading-relaxed wrap-break-word overflow-wrap-anywhere">
              {description}
            </p>
          )}
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-6 right-6 shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-inner hover:bg-slate-50 transition-colors"
          title="View on GitHub"
        >
          <ExternalLink size={16} className="opacity-70" />
        </a>
      </div>

      {/* Highlights */}
      {repo.metadata?.highlights && repo.metadata.highlights.length > 0 && (
        <div className="mb-4 w-full max-w-full overflow-hidden">
          <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
            Key Features
          </p>
          <ul className="space-y-1">
            {repo.metadata.highlights.map((highlight, index) => (
              <li
                key={index}
                className="text-sm text-slate-700 flex items-start gap-2"
              >
                <span className="text-blue-600 mt-0.5 shrink-0">•</span>
                <span className="wrap-break-word overflow-wrap-anywhere">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      {repo.metadata?.techStack && repo.metadata.techStack.length > 0 && (
        <div className="mb-4 w-full max-w-full overflow-hidden">
          <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {repo.metadata.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-lg border border-black/5 bg-white px-2 py-0.5 text-xs font-medium text-slate-700 shadow-inner"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* GitHub Topics */}
      {repo.topics && repo.topics.length > 0 && !repo.metadata?.techStack && (
        <div className="flex flex-wrap gap-2 mb-4 w-full max-w-full overflow-hidden">
          {repo.topics.slice(0, 6).map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center rounded-lg border border-black/5 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-inner"
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 6 && (
            <span className="inline-flex items-center rounded-lg border border-black/5 bg-white px-2.5 py-1 text-xs font-medium text-slate-500 shadow-inner">
              +{repo.topics.length - 6}
            </span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-4 border-t border-black/5">
        <Calendar size={12} className="shrink-0" />
        <span>Updated {formatDate(repo.updated_at)}</span>
      </div>

      {/* Homepage Link */}
      {repo.homepage && (
        <a
          href={repo.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 wrap-break-word"
        >
          <ExternalLink size={14} className="shrink-0" />
          Visit Website
        </a>
      )}
    </div>
  );
}
