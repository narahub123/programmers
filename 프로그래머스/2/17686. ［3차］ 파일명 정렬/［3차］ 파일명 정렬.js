function solution(files) {
  return files.sort((a, b) => {
    const regex = /^([^0-9]+)(\d{1,5})/;

    const [, head1, num1] = a.match(regex);
    const [, head2, num2] = b.match(regex);

    const headCompare = head1.toLowerCase().localeCompare(head2.toLowerCase());
    if (headCompare !== 0) return headCompare;

    return Number(num1) - Number(num2);
  });
}