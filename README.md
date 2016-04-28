# Uber Grabber

Uber Grabber is a grabber for grabbing your Ubers. You provide Uber Grabber with your Uber grabbables, it grabs them for you, and you get a spreadsheet with your trip data: `date`, `fare`, `miles`, `time`, `startAddress`, `startTime`, `endAddress`, `endTime`, `car`, `trip`.

### Requirements

Node.js 4+

### Installation

```shell
git clone https://github.com/jordansexton/uber-grabber.git
cd uber-grabber
npm install
```

Open [index.js](https://github.com/jordansexton/uber-grabber/blob/master/index.js) in your editor.

Change the values for `email`, `password`, and `trips`.

By default, the script outputs to `uber.tsv` in the project root. You can change the output file in the same location as the above variables.

### Operation

Open a shell tab. Run:
```shell
npm run selenium
```

Open another shell tab. Run:
```shell
npm test
```
