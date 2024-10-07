export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString('en-US');
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function getPercentOfVote(question, questionOption) {
  const questionVotesTotal =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  return Math.round((questionOption.votes.length / questionVotesTotal) * 100);
}

export function generateCustomId() {
  const uuid = crypto.randomUUID();
  const strippedUuid = uuid.replace(/-/g, '');
  return strippedUuid.slice(0, 21);
}
