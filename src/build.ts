
import { color } from "./color";

const theme = {
  "name": "Awork Dark",
  "type": "dark",
  "semanticHighlighting": true,
  "semanticTokenColors": {
    "enumMember": {
      "foreground": color('teal')
    },
    "variable.constant": {
      "foreground": color('orange')
    },
    "variable.defaultLibrary": {
      "foreground": color('yellow')
    }
  },
  "window.titleBarStyle": "custom",
  "tokenColors": [
    {
      "name": "unison punctuation",
      "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "haskell variable generic-type",
      "scope": "variable.other.generic-type.haskell",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "haskell storage type",
      "scope": "storage.type.haskell",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "support.variable.magic.python",
      "scope": "support.variable.magic.python",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "punctuation.separator.parameters.python",
      "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "variable.parameter.function.language.special.self.python",
      "scope": "variable.parameter.function.language.special.self.python",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "storage.modifier.lifetime.rust",
      "scope": "storage.modifier.lifetime.rust",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "support.function.std.rust",
      "scope": "support.function.std.rust",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "entity.name.lifetime.rust",
      "scope": "entity.name.lifetime.rust",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "variable.language.rust",
      "scope": "variable.language.rust",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "support.constant.edge",
      "scope": "support.constant.edge",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "regexp constant character-class",
      "scope": "constant.other.character-class.regexp",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "regexp operator.quantifier",
      "scope": "keyword.operator.quantifier.regexp",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "punctuation.definition",
      "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "Text",
      "scope": "variable.parameter.function",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Comment Markup Link",
      "scope": "comment markup.link",
      "settings": {
        "foreground": "#6b6e86"
      }
    },
    {
      "name": "markup diff",
      "scope": "markup.changed.diff",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "diff",
      "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "inserted.diff",
      "scope": "markup.inserted.diff",
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "deleted.diff",
      "scope": "markup.deleted.diff",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "c++ function",
      "scope": "meta.function.c,meta.function.cpp",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "c++ block",
      "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "js/ts punctuation separator key-value",
      "scope": "punctuation.separator.key-value",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "js/ts import keyword",
      "scope": "keyword.operator.expression.import",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "math js/ts",
      "scope": "support.constant.math",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "math property js/ts",
      "scope": "support.constant.property.math",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "js/ts variable.other.constant",
      "scope": "variable.other.constant",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "java type",
      "scope": [
        "storage.type.annotation.java",
        "storage.type.object.array.java"
      ],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "java source",
      "scope": "source.java",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "java modifier.import",
      "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "java modifier.import",
      "scope": "meta.method.java",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "java modifier.import",
      "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "java instanceof",
      "scope": "keyword.operator.instanceof.java",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "java variable.name",
      "scope": "meta.definition.variable.name.java",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "operator logical",
      "scope": "keyword.operator.logical",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "operator bitwise",
      "scope": "keyword.operator.bitwise",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "operator channel",
      "scope": "keyword.operator.channel",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "support.constant.property-value.scss",
      "scope": "support.constant.property-value.scss,support.constant.property-value.css",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "CSS/SCSS/LESS Operators",
      "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "css color standard name",
      "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "css comma",
      "scope": "punctuation.separator.list.comma.css",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "css attribute-name.id",
      "scope": "support.constant.color.w3c-standard-color-name.css",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "css property-name",
      "scope": "support.type.vendored.property-name.css",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "js/ts module",
      "scope": "support.module.node,support.type.object.module,support.module.node",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "entity.name.type.module",
      "scope": "entity.name.type.module",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "js variable readwrite",
      "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "js/ts json",
      "scope": "support.constant.json",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "js/ts Keyword",
      "scope": [
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.ternary",
        "keyword.operator.optional",
        "keyword.operator.expression.keyof"
      ],
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "js/ts console",
      "scope": "support.type.object.console",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "js/ts support.variable.property.process",
      "scope": "support.variable.property.process",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "js console function",
      "scope": "entity.name.function,support.function.console",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "keyword.operator.misc.rust",
      "scope": "keyword.operator.misc.rust",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "keyword.operator.sigil.rust",
      "scope": "keyword.operator.sigil.rust",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "operator",
      "scope": "keyword.operator.delete",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "js dom",
      "scope": "support.type.object.dom",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "js dom variable",
      "scope": "support.variable.dom,support.variable.property.dom",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "keyword.operator",
      "scope": "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "C operator assignment",
      "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Punctuation",
      "scope": "punctuation.separator.delimiter",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Other punctuation .c",
      "scope": "punctuation.separator.c,punctuation.separator.cpp",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "C type posix-reserved",
      "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "keyword.operator.sizeof.c",
      "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "python parameter",
      "scope": "variable.parameter.function.language.python",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "python type",
      "scope": "support.type.python",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "python logical",
      "scope": "keyword.operator.logical.python",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "pyCs",
      "scope": "variable.parameter.function.python",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "python block",
      "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "python function-call.generic",
      "scope": "meta.function-call.generic.python",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "python placeholder reset to normal string",
      "scope": "constant.character.format.placeholder.other.python",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "Operators",
      "scope": "keyword.operator",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Compound Assignment Operators",
      "scope": "keyword.operator.assignment.compound",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Compound Assignment Operators js/ts",
      "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "Keywords",
      "scope": "keyword",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Namespaces",
      "scope": "entity.name.namespace",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Variables",
      "scope": "variable",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Variables",
      "scope": "variable.c",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Language variables",
      "scope": "variable.language",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Java Variables",
      "scope": "token.variable.parameter.java",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Java Imports",
      "scope": "import.storage.java",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Packages",
      "scope": "token.package.keyword",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Packages",
      "scope": "token.package",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Functions",
      "scope": [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function"
      ],
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "Classes",
      "scope": "entity.name.type.namespace",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Classes",
      "scope": "support.class, entity.name.type.class",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Class name",
      "scope": "entity.name.class.identifier.namespace.type",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Class name",
      "scope": [
        "entity.name.class",
        "variable.other.class.js",
        "variable.other.class.ts"
      ],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Class name php",
      "scope": "variable.other.class.php",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Type Name",
      "scope": "entity.name.type",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Keyword Control",
      "scope": "keyword.control",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Control Elements",
      "scope": "control.elements, keyword.operator.less",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "Methods",
      "scope": "keyword.other.special-method",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "Storage",
      "scope": "storage",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Storage JS TS",
      "scope": "token.storage",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
      "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Java Storage",
      "scope": "token.storage.type.java",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Support",
      "scope": "support.function",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "Support type",
      "scope": "support.type.property-name",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Support type",
      "scope": "support.constant.property-value",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Support type",
      "scope": "support.constant.font-name",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "Meta tag",
      "scope": "meta.tag",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Strings",
      "scope": "string",
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "Inherited Class",
      "scope": "entity.other.inherited-class",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Constant other symbol",
      "scope": "constant.other.symbol",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "Integers",
      "scope": "constant.numeric",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "Constants",
      "scope": "constant",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "Constants",
      "scope": "punctuation.definition.constant",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "Tags",
      "scope": "entity.name.tag",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Attributes",
      "scope": "entity.other.attribute-name",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "Attribute IDs",
      "scope": "entity.other.attribute-name.id",
      "settings": {
        "fontStyle": "normal",
        "foreground": color('cyan')
      }
    },
    {
      "name": "Attribute class",
      "scope": "entity.other.attribute-name.class.css",
      "settings": {
        "fontStyle": "normal",
        "foreground": color('orange')
      }
    },
    {
      "name": "Selector",
      "scope": "meta.selector",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Headings",
      "scope": "markup.heading",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Headings",
      "scope": "markup.heading punctuation.definition.heading, entity.name.section",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "Units",
      "scope": "keyword.other.unit",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Bold",
      "scope": "markup.bold,todo.bold",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "Bold",
      "scope": "punctuation.definition.bold",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "markup Italic",
      "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "emphasis md",
      "scope": "emphasis md",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown headings",
      "scope": "entity.name.section.markdown",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
      "scope": "punctuation.definition.heading.markdown",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "punctuation.definition.list.begin.markdown",
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown heading setext",
      "scope": "markup.heading.setext",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
      "scope": "punctuation.definition.bold.markdown",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
      "scope": "markup.inline.raw.markdown",
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
      "scope": "markup.inline.raw.string.markdown",
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
      "scope": "punctuation.definition.list.markdown",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
      "scope": [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "punctuation.definition.metadata.markdown"
      ],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "beginning.punctuation.definition.list.markdown",
      "scope": ["beginning.punctuation.definition.list.markdown"],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
      "scope": "punctuation.definition.metadata.markdown",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
      "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
      "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "Regular Expressions",
      "scope": "string.regexp",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "Escape Characters",
      "scope": "constant.character.escape",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "Embedded",
      "scope": "punctuation.section.embedded, variable.interpolation",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Embedded",
      "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "illegal",
      "scope": "invalid.illegal",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "illegal",
      "scope": "invalid.illegal.bad-ampersand.html",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Broken",
      "scope": "invalid.broken",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Deprecated",
      "scope": "invalid.deprecated",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Unimplemented",
      "scope": "invalid.unimplemented",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
      "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
      "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
      "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
      "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "[VSCODE-CUSTOM] JSON Property Name",
      "scope": "support.type.property-name.json",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
      "scope": "support.type.property-name.json punctuation",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "laravel blade tag",
      "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "laravel blade @",
      "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "use statement for other classes",
      "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "error suppression",
      "scope": "keyword.operator.error-control.php",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "php instanceof",
      "scope": "keyword.operator.type.php",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "style double quoted array index normal begin",
      "scope": "punctuation.section.array.begin.php",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "style double quoted array index normal end",
      "scope": "punctuation.section.array.end.php",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "php illegal.non-null-typehinted",
      "scope": "invalid.illegal.non-null-typehinted.php",
      "settings": {
        "foreground": "#f44747"
      }
    },
    {
      "name": "php types",
      "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "php call-function",
      "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "php function-resets",
      "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "support php constants",
      "scope": "support.constant.core.rust",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "support php constants",
      "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "php goto",
      "scope": "entity.name.goto-label.php,support.other.php",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "php logical/bitwise operator",
      "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "php regexp operator",
      "scope": "keyword.operator.regexp.php",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "php comparison",
      "scope": "keyword.operator.comparison.php",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "php heredoc/nowdoc",
      "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "python function decorator @",
      "scope": "meta.function.decorator.python",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "python function support",
      "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "parameter function js/ts",
      "scope": "function.parameter",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "brace function",
      "scope": "function.brace",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "parameter function ruby cs",
      "scope": "function.parameter.ruby, function.parameter.cs",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "constant.language.symbol.ruby",
      "scope": "constant.language.symbol.ruby",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "rgb-value",
      "scope": "rgb-value",
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "rgb value",
      "scope": "inline-color-decoration rgb-value",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "rgb value less",
      "scope": "less rgb-value",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "sass selector",
      "scope": "selector.sass",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "ts primitive/builtin types",
      "scope": "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "block scope",
      "scope": "block.scope.end,block.scope.begin",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "cs storage type",
      "scope": "storage.type.cs",
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "cs local variable",
      "scope": "entity.name.variable.local.cs",
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "scope": "token.info-token",
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "scope": "token.warn-token",
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "scope": "token.error-token",
      "settings": {
        "foreground": "#f44747"
      }
    },
    {
      "scope": "token.debug-token",
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "String interpolation",
      "scope": [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded"
      ],
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Reset JavaScript string interpolation expression",
      "scope": ["meta.template.expression"],
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Import module JS",
      "scope": ["keyword.operator.module"],
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "js Flowtype",
      "scope": ["support.type.type.flowtype"],
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "js Flow",
      "scope": ["support.type.primitive"],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "js class prop",
      "scope": ["meta.property.object"],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "js func parameter",
      "scope": ["variable.parameter.function.js"],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "js template literals begin",
      "scope": ["keyword.other.template.begin"],
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "js template literals end",
      "scope": ["keyword.other.template.end"],
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "js template literals variable braces begin",
      "scope": ["keyword.other.substitution.begin"],
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "js template literals variable braces end",
      "scope": ["keyword.other.substitution.end"],
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "js operator.assignment",
      "scope": ["keyword.operator.assignment"],
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "go operator",
      "scope": ["keyword.operator.assignment.go"],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "go operator",
      "scope": [
        "keyword.operator.arithmetic.go",
        "keyword.operator.address.go"
      ],
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "Go package name",
      "scope": ["entity.name.package.go"],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "elm prelude",
      "scope": ["support.type.prelude.elm"],
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "elm constant",
      "scope": ["support.constant.elm"],
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "template literal",
      "scope": ["punctuation.quasi.element"],
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "html/pug (jade) escaped characters and entities",
      "scope": ["constant.character.entity"],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      "scope": [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class"
      ],
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "Clojure globals",
      "scope": ["entity.global.clojure"],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Clojure symbols",
      "scope": ["meta.symbol.clojure"],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Clojure constants",
      "scope": ["constant.keyword.clojure"],
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "CoffeeScript Function Argument",
      "scope": ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Ini Default Text",
      "scope": ["source.ini"],
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "Makefile prerequisities",
      "scope": ["meta.scope.prerequisites.makefile"],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Makefile text colour",
      "scope": ["source.makefile"],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Groovy import names",
      "scope": ["storage.modifier.import.groovy"],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Groovy Methods",
      "scope": ["meta.method.groovy"],
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "Groovy Variables",
      "scope": ["meta.definition.variable.name.groovy"],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "Groovy Inheritance",
      "scope": ["meta.definition.class.inherited.classes.groovy"],
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "HLSL Semantic",
      "scope": ["support.variable.semantic.hlsl"],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "HLSL Types",
      "scope": [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl"
      ],
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "SQL Variables",
      "scope": ["text.variable", "text.bracketed"],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "types",
      "scope": ["support.type.swift", "support.type.vb.asp"],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "heading 1, keyword",
      "scope": ["entity.name.function.xi"],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "heading 2, callable",
      "scope": ["entity.name.class.xi"],
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "heading 3, property",
      "scope": ["constant.character.character-class.regexp.xi"],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "heading 4, type, class, interface",
      "scope": ["constant.regexp.xi"],
      "settings": {
        "foreground": color('purple')
      }
    },
    {
      "name": "heading 5, enums, preprocessor, constant, decorator",
      "scope": ["keyword.control.xi"],
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "heading 6, number",
      "scope": ["invalid.xi"],
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "string",
      "scope": ["beginning.punctuation.definition.quote.markdown.xi"],
      "settings": {
        "foreground": color('green')
      }
    },
    {
      "name": "comments",
      "scope": ["beginning.punctuation.definition.list.markdown.xi"],
      "settings": {
        "foreground": "#6b6e86"
      }
    },
    {
      "name": "link",
      "scope": ["constant.character.xi"],
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "accent",
      "scope": ["accent.xi"],
      "settings": {
        "foreground": color('cyan')
      }
    },
    {
      "name": "wikiword",
      "scope": ["wikiword.xi"],
      "settings": {
        "foreground": color('orange')
      }
    },
    {
      "name": "language operators like '+', '-' etc",
      "scope": ["constant.other.color.rgb-value.xi"],
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "elements to dim",
      "scope": ["punctuation.definition.tag.xi"],
      "settings": {
        "foreground": "#6b6e86"
      }
    },
    {
      "name": "C++/C#",
      "scope": [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition"
      ],
      "settings": {
        "foreground": color('yellow')
      }
    },
    {
      "name": "Markdown underscore-style headers",
      "scope": [
        "entity.name.label.cs",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown"
      ],
      "settings": {
        "foreground": "#ff4398"
      }
    },
    {
      "name": "meta.brace.square",
      "scope": [" meta.brace.square"],
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "name": "Comments",
      "scope": "comment, punctuation.definition.comment",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#6b6e86"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Quote",
      "scope": "markup.quote.markdown",
      "settings": {
        "foreground": "#6b6e86"
      }
    },
    {
      "name": "punctuation.definition.block.sequence.item.yaml",
      "scope": "punctuation.definition.block.sequence.item.yaml",
      "settings": {
        "foreground": "#d4d4d4"
      }
    },
    {
      "scope": ["constant.language.symbol.elixir"],
      "settings": {
        "foreground": color('teal')
      }
    },
    {
      "name": "js/ts italic",
      "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "comment",
      "scope": "comment.line.double-slash,comment.block.documentation",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "Python Keyword Control",
      "scope": "keyword.control.import.python,keyword.control.flow.python",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "markup.italic.markdown",
      "scope": "markup.italic.markdown",
      "settings": {
        "fontStyle": "italic"
      }
    }
  ],
  "colors": {
    "foreground": "#dae1e8",
    "focusBorder": "#7bb4ff",
    "selection.background": color('blue'),
    "scrollbar.shadow": "#000000",
    "activityBar.foreground": "#ffffff",
    "activityBar.background": color('night'),
    "activityBar.inactiveForeground": "#4d9aff80",
    "activityBarBadge.foreground": "#ffffff",
    "activityBarBadge.background": color('blue'),
    "activityBar.activeBackground": color('purple'),
    "sideBar.background": color('night'),
    "sideBar.foreground": "#dae1e8",
    "sideBarSectionHeader.background": "#00000000",
    "sideBarSectionHeader.foreground": color('sky'),
    "sideBarSectionHeader.border": "#cccccc33",
    "sideBarTitle.foreground": color('ice'),
    "list.inactiveSelectionBackground": color('slate'),
    "list.inactiveSelectionForeground": color('sky'),
    "list.hoverBackground": "#2a2d2e",
    "list.hoverForeground": color('sky'),
    "list.activeSelectionBackground": "#094771",
    "list.activeSelectionForeground": "#ffffff",
    "tree.indentGuidesStroke": "#585858",
    "list.dropBackground": "#383b3d",
    "list.highlightForeground": "#0097fb",
    "list.focusBackground": "#062f4a",
    "list.focusForeground": color('sky'),
    "listFilterWidget.background": "#653723",
    "listFilterWidget.outline": "#00000000",
    "listFilterWidget.noMatchesOutline": "#be1100",
    "statusBar.foreground": "#ffffff",
    "statusBar.background": color('indigo'),
    "statusBarItem.hoverBackground": "#ffffff1f",
    "statusBar.debuggingBackground": color('orange'),
    "statusBar.debuggingForeground": "#ffffff",
    "statusBar.noFolderBackground": color('purple'),
    "statusBar.noFolderForeground": "#ffffff",
    "statusBarItem.remoteBackground": color('green'),
    "statusBarItem.remoteForeground": "#141622",
    "titleBar.activeBackground": color('night'),
    "titleBar.activeForeground": color('sky'),
    "titleBar.inactiveBackground": "#3c3c3c99",
    "titleBar.inactiveForeground": "#cccccc99",
    "titleBar.border": "#00000000",
    "menubar.selectionForeground": "#4d4242",
    "menubar.selectionBackground": "#ffffff1a",
    "menubar.selectionBorder": color('green'),
    "menu.foreground": color('night'),
    "menu.background": "#ffffff",
    "menu.selectionForeground": "#ffffff",
    "menu.selectionBackground": color('indigo'),
    "menu.selectionBorder": "#00000000",
    "menu.separatorBackground": color('ice'),
    "menu.border": "#00000085",
    "button.background": "#0e639c",
    "button.foreground": "#ffffff",
    "button.hoverBackground": "#1177bb",
    "button.secondaryForeground": "#ffffff",
    "button.secondaryBackground": "#3a3d41",
    "button.secondaryHoverBackground": "#45494e",
    "input.background": color('night'),
    "input.border": "#00000000",
    "input.foreground": color('sky'),
    "inputOption.activeBackground": "#007fd466",
    "inputOption.activeBorder": "#007acc00",
    "inputOption.activeForeground": "#ffffff",
    "input.placeholderForeground": "#a6a6a6",
    "textLink.foreground": "#3794ff",
    "editor.background": color('night'),
    "editor.foreground": "#d4d4d4",
    "editorLineNumber.foreground": "#9373ff50",
    "editorCursor.foreground": "#aeafad",
    "editorCursor.background": "#000000",
    "editor.selectionBackground": "#264f78",
    "editor.inactiveSelectionBackground": "#3a3d41",
    "editorWhitespace.foreground": "#e3e4e229",
    "editor.selectionHighlightBackground": "#add6ff26",
    "editor.selectionHighlightBorder": "#495F77",
    "editor.findMatchBackground": "#515c6a",
    "editor.findMatchBorder": "#74879f",
    "editor.findMatchHighlightBackground": "#ea5c0055",
    "editor.findMatchHighlightBorder": "#ffffff00",
    "editor.findRangeHighlightBackground": "#3a3d4166",
    "editor.findRangeHighlightBorder": "#ffffff00",
    "editor.rangeHighlightBackground": "#ffffff0b",
    "editor.rangeHighlightBorder": "#ffffff00",
    "editor.hoverHighlightBackground": "#264f7840",
    "editor.wordHighlightStrongBackground": "#004972b8",
    "editor.wordHighlightBackground": "#575757b8",
    "editor.lineHighlightBackground": "#ffffff0A",
    "editor.lineHighlightBorder": "#282828",
    "editorLineNumber.activeForeground": color('yellow'),
    "editorLink.activeForeground": "#4e94ce",
    "editorIndentGuide.background1": "#404040",
    "editorIndentGuide.activeBackground1": "#707070",
    "editorRuler.foreground": "#5a5a5a",
    "editorBracketMatch.background": "#0064001a",
    "editorBracketMatch.border": "#888888",
    "editor.foldBackground": "#264f784d",
    "editorOverviewRuler.background": "#25252500",
    "editorOverviewRuler.border": "#7f7f7f4d",
    "editorError.foreground": "#f48771",
    "editorError.background": "#B73A3400",
    "editorError.border": "#ffffff00",
    "editorWarning.foreground": "#cca700",
    "editorWarning.background": "#A9904000",
    "editorWarning.border": "#ffffff00",
    "editorInfo.foreground": "#75beff",
    "editorInfo.background": "#4490BF00",
    "editorInfo.border": "#4490BF00",
    "editorGutter.background": color('night'),
    "editorGutter.modifiedBackground": "#0c7d9d",
    "editorGutter.addedBackground": "#587c0c",
    "editorGutter.deletedBackground": "#94151b",
    "editorGutter.foldingControlForeground": "#c5c5c5",
    "editorCodeLens.foreground": "#999999",
    "editorGroup.border": "#444444",
    "diffEditor.insertedTextBackground": "#9bb95525",
    "diffEditor.insertedTextBorder": "#ff439800",
    "diffEditor.removedTextBackground": "#ff000010",
    "diffEditor.removedTextBorder": "#00000000",
    "diffEditor.border": "#000000",
    "panel.background": "#000000",
    "panel.border": "#80808059",
    "panelTitle.activeBorder": "#e7e7e7",
    "panelTitle.activeForeground": "#e7e7e7",
    "panelTitle.inactiveForeground": "#e7e7e799",
    "badge.background": color('midnight'),
    "badge.foreground": "#ffffff",
    "terminal.foreground": color('sky'),
    "terminal.selectionBackground": "#ffffff40",
    "terminalCursor.background": "#0087FF",
    "terminalCursor.foreground": "#ffffff",
    "terminal.border": "#80808059",
    "terminal.ansiBlack": "#000000",
    "terminal.ansiBlue": "#2472c8",
    "terminal.ansiBrightBlack": "#666666",
    "terminal.ansiBrightBlue": "#3b8eea",
    "terminal.ansiBrightCyan": "#29b8db",
    "terminal.ansiBrightGreen": "#23d18b",
    "terminal.ansiBrightMagenta": "#d670d6",
    "terminal.ansiBrightRed": "#f14c4c",
    "terminal.ansiBrightWhite": "#e5e5e5",
    "terminal.ansiBrightYellow": "#f5f543",
    "terminal.ansiCyan": "#11a8cd",
    "terminal.ansiGreen": "#0dbc79",
    "terminal.ansiMagenta": "#bc3fbc",
    "terminal.ansiRed": "#cd3131",
    "terminal.ansiWhite": "#e5e5e5",
    "terminal.ansiYellow": "#e5e510",
    "breadcrumb.background": "#000000",
    "breadcrumb.foreground": "#cccccccc",
    "breadcrumb.focusForeground": "#e0e0e0",
    "editorGroupHeader.tabsBackground": color('night'),
    "tab.activeForeground": "#ffffff",
    "tab.border": color('smoke'),
    "tab.activeBackground": color('night'),
    "tab.activeBorder": color('blue'),
    "tab.activeBorderTop": "#00000000",
    "tab.inactiveBackground": color('night'),
    "tab.inactiveForeground": "#ffffff80",
    "scrollbarSlider.background": "#79797966",
    "scrollbarSlider.hoverBackground": "#646464b3",
    "scrollbarSlider.activeBackground": "#bfbfbf66",
    "progressBar.background": "#3f79c4",
    "widget.shadow": "#0000005c",
    "editorWidget.foreground": color('sky'),
    "editorWidget.background": color('smoke'),
    "editorWidget.resizeBorder": "#5F5F5F",
    "pickerGroup.border": "#3f3f46",
    "pickerGroup.foreground": "#3794ff",
    "debugToolBar.background": "#333333",
    "debugToolBar.border": "#474747",
    "notifications.foreground": color('sky'),
    "notifications.background": color('night'),
    "notificationToast.border": "#282a39",
    "notificationsErrorIcon.foreground": "#f48771",
    "notificationsWarningIcon.foreground": "#cca700",
    "notificationsInfoIcon.foreground": "#75beff",
    "notificationCenter.border": "#474747",
    "notificationCenterHeader.foreground": color('sky'),
    "notificationCenterHeader.background": "#303031",
    "notifications.border": "#303031",
    "gitDecoration.addedResourceForeground": "#81b88b",
    "gitDecoration.conflictingResourceForeground": "#6c6cc4",
    "gitDecoration.deletedResourceForeground": "#c74e39",
    "gitDecoration.ignoredResourceForeground": "#8c8c8c",
    "gitDecoration.modifiedResourceForeground": "#e2c08d",
    "gitDecoration.stageDeletedResourceForeground": "#c74e39",
    "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": "#73c991",
    "editorMarkerNavigation.background": "#2d2d30",
    "editorMarkerNavigationError.background": "#f48771",
    "editorMarkerNavigationWarning.background": "#cca700",
    "editorMarkerNavigationInfo.background": "#75beff",
    "merge.currentHeaderBackground": "#367366",
    "merge.currentContentBackground": "#27403B",
    "merge.incomingHeaderBackground": "#395F8F",
    "merge.incomingContentBackground": "#28384B",
    "merge.commonHeaderBackground": "#383838",
    "merge.commonContentBackground": "#282828",
    "editorSuggestWidget.background": color('smoke'),
    "editorSuggestWidget.border": "#454545",
    "editorSuggestWidget.foreground": "#d4d4d4",
    "editorSuggestWidget.highlightForeground": "#0097fb",
    "editorSuggestWidget.selectedBackground": "#062f4a",
    "editorHoverWidget.foreground": color('sky'),
    "editorHoverWidget.background": color('smoke'),
    "editorHoverWidget.border": "#454545",
    "peekView.border": "#007acc",
    "peekViewEditor.background": "#001f33",
    "peekViewEditorGutter.background": "#001f33",
    "peekViewEditor.matchHighlightBackground": "#ff8f0099",
    "peekViewEditor.matchHighlightBorder": "#ee931e",
    "peekViewResult.background": color('smoke'),
    "peekViewResult.fileForeground": "#ffffff",
    "peekViewResult.lineForeground": color('ice'),
    "peekViewResult.matchHighlightBackground": "#ea5c004d",
    "peekViewResult.selectionBackground": "#3399ff33",
    "peekViewResult.selectionForeground": "#ffffff",
    "peekViewTitle.background": "#1e1e1e",
    "peekViewTitleDescription.foreground": "#ccccccb3",
    "peekViewTitleLabel.foreground": "#ffffff",
    "icon.foreground": "#dae1e8",
    "checkbox.background": color('night'),
    "checkbox.foreground": color('sky'),
    "checkbox.border": "#00000000",
    "dropdown.background": color('night'),
    "dropdown.foreground": color('sky'),
    "dropdown.border": "#00000000",
    "minimapGutter.addedBackground": "#587c0c",
    "minimapGutter.modifiedBackground": "#0c7d9d",
    "minimapGutter.deletedBackground": "#94151b",
    "minimap.findMatchHighlight": "#515c6a",
    "minimap.selectionHighlight": "#264f78",
    "minimap.errorHighlight": "#f48771",
    "minimap.warningHighlight": "#cca700",
    "minimap.background": color('night'),
    "sideBar.dropBackground": "#383b3d",
    "editorGroup.emptyBackground": color('night'),
    "panelSection.border": "#80808059",
    "statusBarItem.activeBackground": "#FFFFFF25",
    "settings.headerForeground": "#dae1e8",
    "settings.focusedRowBackground": "#ffffff07",
    "walkThrough.embeddedEditorBackground": "#00000050",
    "breadcrumb.activeSelectionForeground": "#e0e0e0",
    "editorGutter.commentRangeForeground": "#c5c5c5",
    "debugExceptionWidget.background": "#333333",
    "debugExceptionWidget.border": "#474747"
  }
}


// Create a json file with the values from theme.

import fs from 'fs';
fs.writeFileSync('themes/theme-dark.json', JSON.stringify(theme, null, 2));
