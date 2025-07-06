<<<<<<< HEAD
// Automatic Table Of Contents 1.6.1 (https://github.com/johansatge)
var c=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var d=c((ee,k)=>{var g=class{},p={},v=class{},w=t=>t;if(A()){let t=require("obsidian");g=t.Plugin,p=t.MarkdownRenderer,v=t.MarkdownRenderChild,w=t.htmlToMarkdown}k.exports={Plugin:g,MarkdownRenderer:p,MarkdownRenderChild:v,htmlToMarkdown:w};function A(){return typeof process!="object"?!0:!process.env||!process.env.JEST_WORKER_ID}});var y=c((re,b)=>{var s={title:{type:"string",default:"",comment:""},style:{type:"value",default:"nestedList",values:["nestedList","nestedOrderedList","inlineFirstLevel"],comment:"TOC style (nestedList|nestedOrderedList|inlineFirstLevel)"},minLevel:{type:"number",default:0,comment:"Include headings from the specified level"},maxLevel:{type:"number",default:0,comment:"Include headings up to the specified level"},include:{type:"regexp",default:null,comment:""},exclude:{type:"regexp",default:null,comment:""},includeLinks:{type:"boolean",default:!0,comment:"Make headings clickable"},hideWhenEmpty:{type:"boolean",default:!1,comment:"Hide TOC if no headings are found"},debugInConsole:{type:"boolean",default:!1,comment:"Print debug info in Obsidian console"}};b.exports={getOptionsDocs:P,parseOptionsFromSourceText:E};function P(){let t=[];for(let e of Object.keys(s)){let n=s[e],r=n.comment.length>0?` # ${n.comment}`:"";t.push(`${e}: ${n.default}${r}`)}return t.join(`
`)}function E(t=""){let e={};for(let n of Object.keys(s))e[n]=s[n].default;for(let n of t.split(`
`)){let r=R(n);r!==null&&(e[r.name]=r.value)}return e}function R(t){let e=t.match(/([a-zA-Z0-9._ ]+):(.*)/);if(t.startsWith("#")||!e)return null;let n=e[1].trim(),r=s[n],o=e[2].trim();(!r||!["string","regexp"].includes(r.type))&&(o=o.replace(/#[^#]*$/,"").trim());let a=new Error(`Invalid value for \`${n}\``);if(r&&r.type==="number"){let i=Number.parseInt(o);if(i<0)throw a;return{name:n,value:i}}if(r&&r.type==="boolean"){if(!["true","false"].includes(o))throw a;return{name:n,value:o==="true"}}if(r&&r.type==="value"){if(!r.values.includes(o))throw a;return{name:n,value:o}}if(r&&r.type==="string")return{name:n,value:o};if(r&&r.type==="regexp")try{let i=/^\/(.*)\/([a-z]*)/.exec(o);if(!i)throw new Error("Invalid regexp");let l=new RegExp(i[1],i[2]);return{name:n,value:l}}catch{throw a}return null}});var C=c((oe,x)=>{var{htmlToMarkdown:_}=d();x.exports={isHeadingAllowed:j,getFormattedMarkdownHeading:S};function j(t,e){return e.include?e.include.test(t):e.exclude?!e.exclude.test(t):!0}function S(t,e){if(e.includeLinks){let n=t;n=L(n),n=q(n),n=M(n,!1);let r=t;return r=M(r,!0),r=W(r),`[[#${r}|${n}]]`}return t}function L(t){return t.replaceAll("*","").replaceAll("_","").replaceAll("`","").replaceAll("==","").replaceAll("~~","").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1")}function q(t){return L(_(t))}function M(t,e){return t.replace(/\[\[([^\]]+)\|([^\]]+)\]\]/g,e?"$1 $2":"$2").replace(/\[\[([^\]]+)\]\]/g,"$1").replaceAll("[[","").replaceAll("| ",e?"":"- ").replaceAll("|",e?" ":"-")}function W(t){return t.replaceAll("#","")}});var F=c((le,H)=>{var{isHeadingAllowed:$,getFormattedMarkdownHeading:I}=C();H.exports={getMarkdownFromHeadings:N};function N(t,e){let n={nestedList:D,nestedOrderedList:B,inlineFirstLevel:z},r="";if(e.title&&e.title.length>0){let a=e.style==="inlineFirstLevel"?" ":`
`;r+=`${e.title}${a}`}let o=n[e.style](t,e);return o===null?e.hideWhenEmpty?"":`${r}_Table of contents: no headings found_`:r+o}function D(t,e){return O(t,!1,e)}function B(t,e){return O(t,!0,e)}function O(t,e,n){let r=e?"1.":"-",o=[],a=n.minLevel>0?n.minLevel:Math.min(...t.map(l=>l.level)),i=0;for(let l of t)if(!(i>0&&l.level>i)){if(l.level<=i&&(i=0),!$(l.heading,n)){i=l.level;continue}l.level<a||n.maxLevel>0&&l.level>n.maxLevel||l.heading.length!==0&&o.push(`${"	".repeat(l.level-a)}${r} ${I(l.heading,n)}`)}return o.length>0?o.join(`
`):null}function z(t,e){let n=e.minLevel>0?e.minLevel:Math.min(...t.map(o=>o.level)),r=t.filter(o=>o.level===n).filter(o=>o.heading.length>0).filter(o=>$(o.heading,e)).map(o=>I(o.heading,e));return r.length>0?r.join(" | "):null}});var{Plugin:J,MarkdownRenderer:T,MarkdownRenderChild:K}=d(),{getOptionsDocs:V,parseOptionsFromSourceText:Z}=y(),{getMarkdownFromHeadings:G}=F(),h="table-of-contents",Q="toc",m=class extends J{async onload(){let e=(n,r,o)=>{o.addChild(new f(this.app,r,o.sourcePath,n))};this.registerMarkdownCodeBlockProcessor(h,e),this.registerMarkdownCodeBlockProcessor(Q,e),this.addCommand({id:"insert-automatic-table-of-contents",name:"Insert table of contents",editorCallback:U}),this.addCommand({id:"insert-automatic-table-of-contents-docs",name:"Insert table of contents (with available options)",editorCallback:X})}};function U(t){let e=`\`\`\`${h}
\`\`\``;t.replaceRange(e,t.getCursor())}function X(t){let e=[`\`\`\`${h}
${V()}
\`\`\``];t.replaceRange(e.join(`
`),t.getCursor())}var f=class extends K{constructor(e,n,r,o){super(n),this.app=e,this.element=n,this.sourcePath=r,this.sourceText=o}onload(){this.render(),this.registerEvent(this.app.metadataCache.on("changed",this.onMetadataChange.bind(this)))}onMetadataChange(){this.render()}render(){try{let e=Z(this.sourceText);e.debugInConsole&&u("Options",e);let n=this.app.metadataCache.getCache(this.sourcePath),r=n?.headings?n.headings:[];e.debugInConsole&&u("Headings",r);let o=G(r,e);e.debugInConsole&&u("Markdown",o),this.element.empty(),T.renderMarkdown(o,this.element,this.sourcePath,this)}catch(e){let n=`_\u{1F4A5} Could not render table of contents (${e.message})_`;T.renderMarkdown(n,this.element,this.sourcePath,this)}}};function u(t,e){console.log(`%cAutomatic Table Of Contents %c${t}:
`,"color: orange; font-weight: bold","font-weight: bold",e)}module.exports=m;
=======
let Plugin = class {}
let MarkdownRenderer = {}
let MarkdownRenderChild = class {}
let htmlToMarkdown = (html) => html

if (isObsidian()) {
  const obsidian = require('obsidian')
  Plugin = obsidian.Plugin
  MarkdownRenderer = obsidian.MarkdownRenderer
  MarkdownRenderChild = obsidian.MarkdownRenderChild
  htmlToMarkdown = obsidian.htmlToMarkdown
}

const codeblockId = 'table-of-contents'
const codeblockIdShort = 'toc'
const availableOptions = {
  title: {
    type: 'string',
    default: '',
    comment: '',
  },
  style: {
    type: 'value',
    default: 'nestedList',
    values: ['nestedList', 'nestedOrderedList', 'inlineFirstLevel'],
    comment: 'TOC style (nestedList|nestedOrderedList|inlineFirstLevel)',
  },
  minLevel: {
    type: 'number',
    default: 0,
    comment: 'Include headings from the specified level',
  },
  maxLevel: {
    type: 'number',
    default: 0,
    comment: 'Include headings up to the specified level',
  },
  includeLinks: {
    type: 'boolean',
    default: true,
    comment: 'Make headings clickable',
  },
  hideWhenEmpty: {
    type: 'boolean',
    default: false,
    comment: 'Hide TOC if no headings are found',
  },
  debugInConsole: {
    type: 'boolean',
    default: false,
    comment: 'Print debug info in Obsidian console',
  },
}

class ObsidianAutomaticTableOfContents extends Plugin {
  async onload() {
    const handler = (sourceText, element, context) => {
      context.addChild(new Renderer(this.app, element, context.sourcePath, sourceText))
    }
    this.registerMarkdownCodeBlockProcessor(codeblockId, handler)
    this.registerMarkdownCodeBlockProcessor(codeblockIdShort, handler)
    this.addCommand({
      id: 'insert-automatic-table-of-contents',
      name: 'Insert table of contents',
      editorCallback: onInsertToc,
    })
    this.addCommand({
      id: 'insert-automatic-table-of-contents-docs',
      name: 'Insert table of contents (with available options)',
      editorCallback: onInsertTocWithDocs,
    })
  }
}

function onInsertToc(editor) {
  const markdown = `\`\`\`${codeblockId}\n\`\`\``
  editor.replaceRange(markdown, editor.getCursor())
}

function onInsertTocWithDocs(editor) {
  const markdown = [`\`\`\`${codeblockId}`]
  for (const optionName of Object.keys(availableOptions)) {
    const option = availableOptions[optionName]
    const comment = option.comment.length > 0 ? ` # ${option.comment}` : ''
    markdown.push(`${optionName}: ${option.default}${comment}`)
  }
  markdown.push('```')
  editor.replaceRange(markdown.join('\n'), editor.getCursor())
}

class Renderer extends MarkdownRenderChild {
  constructor(app, element, sourcePath, sourceText) {
    super(element)
    this.app = app
    this.element = element
    this.sourcePath = sourcePath
    this.sourceText = sourceText
  }

  // Render on load
  onload() {
    this.render()
    this.registerEvent(this.app.metadataCache.on('changed', this.onMetadataChange.bind(this)))
  }

  // Render on file change
  onMetadataChange() {
    this.render()
  }

  render() {
    try {
      const options = parseOptionsFromSourceText(this.sourceText)
      if (options.debugInConsole) debug('Options', options)

      const metadata = this.app.metadataCache.getCache(this.sourcePath)
      const headings = metadata?.headings ? metadata.headings : []
      if (options.debugInConsole) debug('Headings', headings)

      const markdown = getMarkdownFromHeadings(headings, options)
      if (options.debugInConsole) debug('Markdown', markdown)

      this.element.empty()
      MarkdownRenderer.renderMarkdown(markdown, this.element, this.sourcePath, this)
    } catch (error) {
      const readableError = `_💥 Could not render table of contents (${error.message})_`
      MarkdownRenderer.renderMarkdown(readableError, this.element, this.sourcePath, this)
    }
  }
}

function getMarkdownFromHeadings(headings, options) {
  const markdownHandlersByStyle = {
    nestedList: getMarkdownNestedListFromHeadings,
    nestedOrderedList: getMarkdownNestedOrderedListFromHeadings,
    inlineFirstLevel: getMarkdownInlineFirstLevelFromHeadings,
  }
  let titleMarkdown = ''
  if (options.title && options.title.length > 0) {
    const titleSeparator = options.style === 'inlineFirstLevel' ? ' ' : '\n'
    titleMarkdown += `${options.title}${titleSeparator}`
  }
  const markdownHeadings = markdownHandlersByStyle[options.style](headings, options)
  if (markdownHeadings === null) {
    if (options.hideWhenEmpty) {
      return ''
    }
    return `${titleMarkdown}_Table of contents: no headings found_`
  }
  return titleMarkdown + markdownHeadings
}

function getMarkdownNestedListFromHeadings(headings, options) {
  return getMarkdownListFromHeadings(headings, false, options)
}

function getMarkdownNestedOrderedListFromHeadings(headings, options) {
  return getMarkdownListFromHeadings(headings, true, options)
}

function getMarkdownListFromHeadings(headings, isOrdered, options) {
  const prefix = isOrdered ? '1.' : '-'
  const lines = []
  const minLevel =
    options.minLevel > 0 ? options.minLevel : Math.min(...headings.map((heading) => heading.level))
  for (const heading of headings) {
    if (heading.level < minLevel) continue
    if (options.maxLevel > 0 && heading.level > options.maxLevel) continue
    if (heading.heading.length === 0) continue
    lines.push(
      `${'\t'.repeat(heading.level - minLevel)}${prefix} ${getMarkdownHeading(heading, options)}`,
    )
  }
  return lines.length > 0 ? lines.join('\n') : null
}

function getMarkdownInlineFirstLevelFromHeadings(headings, options) {
  const minLevel =
    options.minLevel > 0 ? options.minLevel : Math.min(...headings.map((heading) => heading.level))
  const items = headings
    .filter((heading) => heading.level === minLevel)
    .filter((heading) => heading.heading.length > 0)
    .map((heading) => {
      return getMarkdownHeading(heading, options)
    })
  return items.length > 0 ? items.join(' | ') : null
}

function getMarkdownHeading(heading, options) {
  const stripMarkdown = (text) => {
    return text
      .replaceAll('*', '')
      .replaceAll('_', '')
      .replaceAll('`', '')
      .replaceAll('==', '')
      .replaceAll('~~', '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Strip markdown links
  }
  const stripHtml = (text) => stripMarkdown(htmlToMarkdown(text))
  const stripWikilinks = (text, isForLink) => {
    // Strip [[link|text]] format
    // For the text part of the final link we only keep "text"
    // For the link part we need the text + link
    // Example: "# Some [[file.md|heading]]" must be translated to "[[#Some file.md heading|Some heading]]"
    return (
      text
        .replace(/\[\[([^\]]+)\|([^\]]+)\]\]/g, isForLink ? '$1 $2' : '$2')
        .replace(/\[\[([^\]]+)\]\]/g, '$1') // Strip [[link]] format
        // Replace malformed links & reserved wikilinks chars
        .replaceAll('[[', '')
        .replaceAll('| ', isForLink ? '' : '- ')
        .replaceAll('|', isForLink ? ' ' : '-')
    )
  }
  const stripTags = (text) => text.replaceAll('#', '')
  if (options.includeLinks) {
    // Remove markdown, HTML & wikilinks from text for readability, as they are not rendered in a wikilink
    let text = heading.heading
    text = stripMarkdown(text)
    text = stripHtml(text)
    text = stripWikilinks(text, false)
    // Remove wikilinks & tags from link or it won't be clickable (on the other hand HTML & markdown must stay)
    let link = heading.heading
    link = stripWikilinks(link, true)
    link = stripTags(link)

    // Return wiklink style link
    return `[[#${link}|${text}]]`
    // Why not markdown links? Because even if it looks like the text part would have a better compatibility
    // with complex headings (as it would support HTML, markdown, etc) the link part is messy,
    // because it requires some encoding that looks buggy and undocumented; official docs state the link must be URL encoded
    // (https://help.obsidian.md/Linking+notes+and+files/Internal+links#Supported+formats+for+internal+links)
    // but it doesn't work properly, example: "## Some <em>heading</em> with simple HTML" must be encoded as:
    // [Some <em>heading</em> with simple HTML](#Some%20<em>heading</em>%20with%20simpler%20HTML)
    // and not
    // [Some <em>heading</em> with simple HTML](#Some%20%3Cem%3Eheading%3C%2Fem%3E%20with%20simpler%20HTML)
    // Also it won't be clickable at all if the heading contains #tags or more complex HTML
    // (example: ## Some <em style="background: red">heading</em> #with-a-tag)
    // (unless there is a way to encode these use cases that I didn't find)
  }
  return heading.heading
}

function parseOptionsFromSourceText(sourceText = '') {
  const options = {}
  for (const option of Object.keys(availableOptions)) {
    options[option] = availableOptions[option].default
  }
  for (const line of sourceText.split('\n')) {
    const option = parseOptionFromSourceLine(line)
    if (option !== null) {
      options[option.name] = option.value
    }
  }
  return options
}

function parseOptionFromSourceLine(line) {
  const matches = line.match(/([a-zA-Z0-9._ ]+):(.*)/)
  if (line.startsWith('#') || !matches) return null
  const possibleName = matches[1].trim()
  const optionParams = availableOptions[possibleName]
  let possibleValue = matches[2].trim()
  if (!optionParams || optionParams.type !== 'string') {
    // Strip comments from values except for strings (as a string may contain markdown)
    possibleValue = possibleValue.replace(/#[^#]*$/, '').trim()
  }
  const valueError = new Error(`Invalid value for \`${possibleName}\``)
  if (optionParams && optionParams.type === 'number') {
    const value = Number.parseInt(possibleValue)
    if (value < 0) throw valueError
    return { name: possibleName, value }
  }
  if (optionParams && optionParams.type === 'boolean') {
    if (!['true', 'false'].includes(possibleValue)) throw valueError
    return { name: possibleName, value: possibleValue === 'true' }
  }
  if (optionParams && optionParams.type === 'value') {
    if (!optionParams.values.includes(possibleValue)) throw valueError
    return { name: possibleName, value: possibleValue }
  }
  if (optionParams && optionParams.type === 'string') {
    return { name: possibleName, value: possibleValue }
  }
  return null
}

function debug(type, data) {
  console.log(
    ...[
      `%cAutomatic Table Of Contents %c${type}:\n`,
      'color: orange; font-weight: bold',
      'font-weight: bold',
      data,
    ],
  )
}

function isObsidian() {
  if (typeof process !== 'object') {
    return true // Obsidian mobile doesn't have a global process object
  }
  return !process.env || !process.env.JEST_WORKER_ID // Jest runtime is not Obsidian
}

if (isObsidian()) {
  module.exports = ObsidianAutomaticTableOfContents
} else {
  module.exports = {
    parseOptionsFromSourceText,
    getMarkdownFromHeadings,
  }
}
>>>>>>> 40bdb8cc83625296dd481553ab6397237a354555

/* nosourcemap */