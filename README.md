# 🚀 MongoDB Pro Labs

Professional patterns for high-performance NoSQL systems. This repository documents advanced techniques for scaling MongoDB in production environments.

## 🚀 Key Learning Milestones

### 1. Performance & Indexing

I focus on reducing `COLLSCAN` and moving towards optimized `IXSCAN`.

- **Single & Compound Indexes:** Implementing the **ESR (Equality, Sort, Range)** rule.
- **Specialized Indexes:** Using **Text Indexes** for search and **Wildcard Indexes** for dynamic schemas.
- **Analysis:** Using `.explain('executionStats')` to monitor `totalDocsExamined` vs `nReturned`.

### 2. The Aggregation Framework

Built complex pipelines to transform data efficiently on the server side.

- **Core Stages:** `$match`, `$group`, `$project`, `$sort`, and `$lookup` (Left Outer Joins).
- **Parallel Processing:** Using `$facet` to run multiple pipelines in a single stage (perfect for dashboards).

### 3. Advanced Mongoose Patterns

Writing clean, "lean" code for Node.js environments.

- **Optimization:** Extensive use of `.lean()` to bypass Mongoose Documents for 5x faster read performance.
- **Relationships:** Handling data via `.populate()` and manual referencing.
- **Bulk Operations:** Using `bulkWrite` for high-throughput data migrations.

---

## 🛠️ Tech Stack & Concepts

- **Database:** MongoDB (Local & Atlas)
- **ODM:** Mongoose
- **Patterns:** Embedding vs Referencing, Polymorphic Relations, Capped Collections
- **Scalability:** Understanding Replica Sets (High Availability) and Sharding (Horizontal Scaling)

---

## 📂 Featured Examples

### Compound Index Strategy (ESR Rule)

```javascript
// Optimized for: { status: "active", age: { $gt: 18 } } sorted by joinDate
db.users.createIndex({ status: 1, joinDate: 1, age: 1 });
```
