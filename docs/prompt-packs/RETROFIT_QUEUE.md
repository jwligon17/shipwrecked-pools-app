# Retrofit Queue

Purpose: Track retrofit packs required when accepted source-of-truth changes impact packs that are already Implemented or Merged.

## Queue

| Retrofit Pack ID | Reason | Original Change ID | Affected implemented pack | Affected files/systems | Priority | Blocking status | Must complete before |
| ---------------- | ------ | ------------------ | ------------------------- | ---------------------- | -------- | --------------- | -------------------- |
| None             | No retrofit required currently. Affected work-order/shopping-list packs are not yet Implemented or Merged in `STATUS_BOARD.md`. | MI-2026-05-24-REPAIR-INSTALL-PROGRESS | N/A | N/A | N/A | Not Blocking | Before first affected pack reaches Implemented/Merged state |

## Notes

- Add one row per retrofit pack when an accepted change impacts implemented or merged packs.
- Do not replace future-pack planning rows with retrofit rows unless affected packs are already implemented/merged.
- Keep this file additive and update with each qualifying governance change.
