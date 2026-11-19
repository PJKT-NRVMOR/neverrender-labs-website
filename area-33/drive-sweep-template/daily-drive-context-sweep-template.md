# Autonomous Daily Google Drive Context Sweep (Public Template)

A low-friction daily organizer that sweeps loose files, "Untitled document" drafts, chat exports, PDFs, and downloads out of Google Drive Root (`parentId = 'root'`), gives every file a readable lowercase kebab-case name, routes each item into a clean folder structure, stages duplicates safely without deleting anything, and prints a 9-column receipt log directly in chat.

## Hard Safety & UI Guardrails (Read First)

1. **Zero Auto-Deletion (Safe Staging Only)**:
   - Never trash or permanently delete user files autonomously.
   - Route redundant copies, partial exports, or blank `Untitled document` shells into `99_Duplicate_Staging` (`<DUPLICATE_STAGING_FOLDER_ID>`) with the prefix `staged-dup:`.

2. **Read-Light & Anti-Timeout Hygiene**:
   - Exclude full content snippets on initial Drive list/search queries (`exclude_content_snippets: true`) so large folders never time out.
   - Inspect metadata snippets (`exclude_content_snippets: false`) only on untitled or ambiguous files so multi-megabyte documents do not bloat context.

3. **Clipboard-Safe Inline Output (Zero Pop-Ups // Zero File Cards)**:
   - Use ONLY Drive search, metadata inspection, and file rename/move actions during a sweep.
   - Never create new Docs, Sheets, or side-panel artifacts during a sweep.
   - Output the 9-column sweep delta table strictly inline in chat with standard ASCII hyphens (`-`), colons (`:`), or double slashes (`//`), and begin line 1 with `HH:MM:SS-YYYY-MM-DD`.

## Folder Vault Configuration (Replace Angle-Bracket IDs With Yours)

- **Protected Root Folders (Leave Intact in Root)**:
  - `<PROTECTED_FOLDER_1_NAME>`: `<PROTECTED_FOLDER_1_ID>` (e.g., automatic phone backups or browser sync folders)
- **Destination Vault Folders**:
  - `01_Session_And_Chat_Logs`: `<SESSION_LOGS_FOLDER_ID>` -> Prefix: `chat-log:`
  - `02_Projects_And_Specs`: `<PROJECTS_SPECS_FOLDER_ID>` -> Prefix: `tech-spec:`
  - `03_Creative_And_Media`: `<CREATIVE_MEDIA_FOLDER_ID>` -> Prefix: `creative-prod:`
  - `04_Work_And_Career`: `<WORK_CAREER_FOLDER_ID>` -> Prefix: `work-career:`
  - `05_Personal_And_Admin_Records`: `<ADMIN_RECORDS_FOLDER_ID>` -> Prefix: `admin-log:`
  - `06_Research_And_Reading`: `<RESEARCH_REPORTS_FOLDER_ID>` -> Prefix: `research-report:`
  - `00_Scratchpad_Sandbox`: `<SANDBOX_FOLDER_ID>` -> Prefix: `daily-note:`
  - `99_Duplicate_Staging`: `<DUPLICATE_STAGING_FOLDER_ID>` -> Prefix: `staged-dup:`

## Naming & Prefix Rules

1. **Preserve Intentional Sorting Prefixes**:
   - Keep `active-*` prefixes intact on pinned reference documents so they remain at the top of alphabetical source lists.
   - Keep `YYYY-MM-DD-*` Date-First prefixes intact so chronological sorting never breaks.
2. **Rename Loose & Untitled Files**:
   - Convert generic titles (`Untitled document`, raw first-sentence exports, or messy download names) into `<category-prefix>: <descriptive-kebab-case-title>-YYYY-MM-DD` (preserving original file extensions like `.pdf` or `.md` on binary/raw files).
3. **Batch Execution**:
   - Execute all renames and folder moves in parallel batches without stopping to ask for file-by-file confirmation.

## Required Inline Deliverable (9-Column Audit Table)

Output the completed sweep ledger inline in chat using these exact 9 columns, followed by a single status sentence confirming Google Drive root is clear:

`Date Swept | Original Filename | Standardized Kebab-Case Title | Category Tag | Destination Vault / Folder Path | File ID | Source Root | Action Taken | Notes / Summary`