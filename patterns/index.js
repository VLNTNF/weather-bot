'use strict';

const patternDict = [{
    pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
    intent: 'Hello'
},{
    pattern: '\\b(bye|exit)\\b',
    intent: 'Exit'
},{
    //pattern: '\\b(weather\\slike\\sin\\s\\b(?<city>[a-z]+[a-z]+?)\\b(?<time>tomorrow|today)$',
    pattern: '.*\\b(weather).*in\\s+\\b(?<city>[a-z]+\\S[a-z]+)(\\s+(?<time>tomorrow|(after\\stomorrow)))?.*',
    intent: 'Weather'
}];

module.exports = patternDict;