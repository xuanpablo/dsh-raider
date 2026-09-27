# DSH-Guild

[![ Npm](https://img.shields.io/npm/v/dsh-guild)](https://www.npmjs.com/package/dsh-guild)

> Load the "community" into DSH - directly chat with your peers, ask questions for help, and send notifications in DeepSeek Harness. The community content is no longer separated from your Agent workspace.

A Discord community plug-in for DSH users: After registering a community account, you can build yourself or join the community in the DSH panel, chat in real time, send pictures and documents, `@` remind, and manage members, and the whole process does not need

---

The same model is also applicable to team internal communication, interest groups or course answering questions - as long as there is DSH, it can be used by our client.

### Usage scenario

A complete document for each scenario: how to build communities and channels, how to hook role permissions, and how to do daily sports

| Scene | Document | Suitable for whom |

| --- | --- | --- |

| DSH Plug-in Author Management Community | [Scenario 1: Plug-in Author Management Community] (docs/scenario-plugin-author.md) | Plug-in / Skill Author, to issue an announcement, collect feedback, and divert discussion |

| Team / Group Internal Collaboration | [Scenario 2: Internal Team Collaboration] (docs/scenario-team.md) | Small teams working with DSH should put communication and conversation context together |

| Conversation Sharing Square | [Scenario 3: Conversation Sharing Square] (docs/scénario-share-square.md) | Want to operate a public community and let others share / clone DSH conversation |

---

## Screenshot of application

![ Application Screenshot - Announcement] (https://raw.githubusercontent.com/seolhw/dsh-guild/main/assets/screenshots/1-announcement.p Ng)

![ Application screenshots - all] (https://raw.githubusercontent.com/seolhw/dsh-guild/main/assets/screenshots/2-members.png)

![ Application screenshot-menu](https://raw.githubusercontent.com/seolhw/dsh-guild/main/assets/screenshots/3-channel-menu.p Ng)

![ Application Screenshot-Role](https://raw.githubusercontent.com/seolhw/dsh-guild/main/assets/screenshots/4-roles.png)

![ Application screenshot-permission](https://raw.githubusercontent.com/seolhw/dsh-guild/main/assets/screenshots/5-permissions.pn G)

---

## List of functions

### Account number and identity

- [X] Email registration: Send **6-digit verification code** after registration, and you can only log in after verification.

- [X] Email + Password Login, Session Safe Saving (Porteur)

- [X] Forgot your password: ** directly reset the password in the panel through the email verification code** (no need to open the email link)

- [X] Modify user name, upload / change avatar

- [X] Log out

### Community

- [X] Create a community (public / private) with one click, automatically generate **fixed** invitation code and default channel; and automatically send a **pinned unboxing guide** to the "Announcement" channel, and the new community will not be blank.

- [X] Join the public community directly; join the private community with the invitation code

- [X] **Discover the public community**: The sidebar "+" pop-up window cuts to "Discover", browse the public community catalogue, search by name / profile, and enter with one click that has been added; the table shows ** activity ** (recent speech, near 7

- [X] **Official community seed**: The deployer can use the management interface to write to the official community at one time (including the pinned description posts of each channel), giving new users a landing point with content.

- [X] My community list: number of unread channels + `@` Mention the unread number at a glance

- [X] Edit Community Name / Profile / Visibility / Avatar

- [X] Member management: member list and search, assign / withdraw by role, remove members, **transfer ownership**

- [X] **Ban / Unblock**: Blacklist members to prevent them from rejoining, and you can unblock them on the member panel at any time.

- [X] The owner can **delete the community** (channels, messages, member cascasion clearance)

- [X] Join / The upper limit of the number of self-built communities (20 each); self-built is subject to the rolling frequency limit of **5 every 24 hours** to prevent abuse
