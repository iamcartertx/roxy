StyleGuide

# Drivetrain Media UI Style Guide

## Colors
| Role             | Color             | Hex        |
|------------------|-------------------|------------|
| Primary Text     | Dark Gray         | `#1A1A1A`  |
| Background       | White             | `#FFFFFF`  |
| Secondary Gray   | Light Gray        | `#F5F5F5`  |
| Accent - Action  | Orange-Red        | `#EC5C39`  |
| Divider Lines    | Medium Gray       | `#E0E0E0`  |
| Link Hover       | Black             | `#000000`  |
| Project Labels   | User-selectable   | Color-coded (like Wrike spaces) |

---

## Typography
- **Headings**: Poppins (Bold)
- **Body**: Ubuntu or Poppins (Regular)
- **System UI / Inputs**: Poppins

---

## Layout & Navigation
- Left-side vertical nav (icon-based, collapsible)
  - Expands on hover
  - Secondary nav appears inline based on selection
- Header bar shows current path: `Project > Topic > Conversation`
- Right-side utility section includes:
  - User profile dropdown
  - Inbox or Slack integration
  - Settings / Admin
  - Theme customization options (for white-labeling)

---

## UI Components
- **Sidebar Icons**: Minimal, 1-color SVGs (like Supabase)
- **Buttons**:
  - Filled with accent color `#EC5C39`
  - Rounded, hover states darken slightly
- **Cards / Panels**:
  - Soft shadows
  - Rounded corners
  - Clear section dividers (`#E0E0E0`)
- **Modals**:
  - Clean white with top-right close
  - Use accent only for confirm or destructive actions

---

## White Labeling Support
- Theme palette and branding (logo, app name) should be overrideable via config
- Fonts and layout are consistent across themes, only color and brand assets swap
- App title and favicon should be dynamic

---

## Notes
- Style mimics Supabase minimalism
- Project cards or folders can be colored by users (as in Wrike)
- Slack integration for conversation notifications or feedback inbox
- Long-term: style system supports reuse for future bots or customer installs