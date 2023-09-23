function match(candidate, job) {
  if (candidate.minSalary && job.maxSalary)
    return job.maxSalary >= candidate.minSalary * 0.9;
  else throw "Error";
}
