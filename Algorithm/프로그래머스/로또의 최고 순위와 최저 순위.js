const getBoundaryRank = (rank) => (rank ? rank : 1);

function solution(lottos, win_nums) {
  let min_rank = 0,
    max_rank = 0;
  lottos.forEach((num) => {
    if (num == 0) max_rank++;
    if (win_nums.includes(num)) {
      min_rank++;
      max_rank++;
    }
  });
  return [7 - getBoundaryRank(max_rank), 7 - getBoundaryRank(min_rank)];
}
