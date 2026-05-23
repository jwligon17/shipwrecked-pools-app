# Dependency Map

Purpose: Show build dependencies so prompt packs can be sequenced and updated safely.

## Foundation Dependencies

```txt
S00 governance docs
  -> S01 repo/infrastructure
    -> S02 database/domain model
      -> S03 auth/permissions
        -> all feature implementation
```

## Key Feature Dependencies

### Pool Outline

```txt
S02-010 water body schema
S02-013 pool outline schema
S02-014 service point schema
S02-019 photo schema
S02-037 operational relationship constraints
  -> S06 outline studio
    -> S07 customer home
    -> S09 service point status updates
    -> S10 reports
    -> S12 quote/repair links
```

### Route Optimization

```txt
S02-015 route schema
S02-016 route stop schema
S02-029 route optimization schema
  -> S08 route optimization packs
    -> S09 technician visits
    -> S14 route/weather notifications
    -> S16 admin route controls
```

### Commercial Chemical Logs

```txt
S02-030 commercial facility schema
S02-031 commercial daily chemical log schema
S03-023 property manager permissions
S03-024 permission tests
  -> S04 commercial onboarding
    -> S10 commercial chemical logs
    -> S16 commercial admin views
```

### Billing Suspension

```txt
S02-035 billing suspension schema
S13 billing packs
  -> S13-031 two-failed-payments skip-service flag
    -> S14 billing notifications
    -> S16 suspension admin view
    -> S09/S08 technician route skip visibility
```

### Media Retention

```txt
S02-019 photo schema
S02-032 media retention schema
S10 report/photo retention rules
  -> S19-033 through S19-037 retention/deletion tests
```

## Retrofit Rule
If any upstream dependency changes after downstream packs are implemented, create a retrofit prompt pack. Do not silently alter only future packs.
