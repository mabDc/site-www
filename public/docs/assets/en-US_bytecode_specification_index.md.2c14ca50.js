import{o as t,c as e,a as l}from"./app.470af3c8.js";const d='{"title":"Hetu bytecode specification","description":"","frontmatter":{},"headers":[{"level":2,"title":"OpCode","slug":"opcode"},{"level":3,"title":"OpCode.goto","slug":"opcode-goto"},{"level":3,"title":"OpCode.goto","slug":"opcode-goto-2"},{"level":2,"title":"Value","slug":"value"},{"level":3,"title":"Short utf8 string","slug":"short-utf8-string"},{"level":3,"title":"TypeId","slug":"typeid"},{"level":3,"title":"Anonymous funciton","slug":"anonymous-funciton"},{"level":2,"title":"Statement","slug":"statement"},{"level":3,"title":"General declaration","slug":"general-declaration"},{"level":3,"title":"Parameter declaration","slug":"parameter-declaration"},{"level":3,"title":"Declaration block","slug":"declaration-block"},{"level":3,"title":"Function declaration","slug":"function-declaration"},{"level":2,"title":"Class declaration","slug":"class-declaration"},{"level":2,"title":"Enum declaration","slug":"enum-declaration"},{"level":2,"title":"Control flow","slug":"control-flow"},{"level":3,"title":"If","slug":"if"},{"level":3,"title":"While","slug":"while"},{"level":3,"title":"Do","slug":"do"},{"level":3,"title":"For","slug":"for"},{"level":3,"title":"ForIn & ForOf","slug":"forin-forof"},{"level":3,"title":"When","slug":"when"}],"relativePath":"en-US/bytecode_specification/index.md","lastUpdated":1617595381455}',a={},i=l('<h1 id="hetu-bytecode-specification"><a class="header-anchor" href="#hetu-bytecode-specification" aria-hidden="true">#</a> Hetu bytecode specification</h1><h2 id="opcode"><a class="header-anchor" href="#opcode" aria-hidden="true">#</a> OpCode</h2><h3 id="opcode-goto"><a class="header-anchor" href="#opcode-goto" aria-hidden="true">#</a> OpCode.goto</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">HTOpCode.goto</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">distance</td><td style="text-align:left;">2</td><td style="text-align:left;">int16</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="opcode-goto-2"><a class="header-anchor" href="#opcode-goto-2" aria-hidden="true">#</a> OpCode.goto</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">HTOpCode.logicalAnd</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of right expr</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">right expr</td><td style="text-align:left;">65,535</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="value"><a class="header-anchor" href="#value" aria-hidden="true">#</a> Value</h2><h3 id="short-utf8-string"><a class="header-anchor" href="#short-utf8-string" aria-hidden="true">#</a> Short utf8 string</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">length of string</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">utf8 string</td><td style="text-align:left;">255</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="typeid"><a class="header-anchor" href="#typeid" aria-hidden="true">#</a> TypeId</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of arg list</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">arg1, arg2 ...</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isNullable</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="anonymous-funciton"><a class="header-anchor" href="#anonymous-funciton" aria-hidden="true">#</a> Anonymous funciton</h3><h2 id="statement"><a class="header-anchor" href="#statement" aria-hidden="true">#</a> Statement</h2><h3 id="general-declaration"><a class="header-anchor" href="#general-declaration" aria-hidden="true">#</a> General declaration</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isDynamic</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isExtern</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isImmutable</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isMember</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isStatic</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">hasType</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">TypeId</td><td style="text-align:left;">...</td><td style="text-align:left;">TypeId</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">hasInitializer</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of initializer</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">init with endOfExec</td><td style="text-align:left;">65,535</td><td style="text-align:left;">bytecode</td><td style="text-align:left;">true</td></tr></tbody></table><h3 id="parameter-declaration"><a class="header-anchor" href="#parameter-declaration" aria-hidden="true">#</a> Parameter declaration</h3><p>Parameter declaration have no opcode marker at the start since it&#39;s always part of a function declaration.</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes Length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isOptional</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isNamed</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isVariadic</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">hasType</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">TypeId</td><td style="text-align:left;">...</td><td style="text-align:left;">TypeId</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">hasInitializer</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of initializer</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">init with endOfExec</td><td style="text-align:left;">65,535</td><td style="text-align:left;">bytecode</td><td style="text-align:left;">true</td></tr></tbody></table><h3 id="declaration-block"><a class="header-anchor" href="#declaration-block" aria-hidden="true">#</a> Declaration block</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes Length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">HTOpCode.declTable</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of enum decls list</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">enum decls list</td><td style="text-align:left;">65,535</td><td style="text-align:left;">bytecode list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of func decls list</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">func decls list</td><td style="text-align:left;">65,535</td><td style="text-align:left;">bytecode list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of class decls list</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">class decls list</td><td style="text-align:left;">65,535</td><td style="text-align:left;">bytecode list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of var decls list</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">var decls list</td><td style="text-align:left;">65,535</td><td style="text-align:left;">bytecode list</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="function-declaration"><a class="header-anchor" href="#function-declaration" aria-hidden="true">#</a> Function declaration</h3><p>FunctionTypeId is not included in bytecode, the vm has to create the typeid according to the param types and return value type.</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes Length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">declId</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">type params length</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">type params list</td><td style="text-align:left;">...</td><td style="text-align:left;">short utf8 string list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">hasExternalTypedef</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">externalTypedef</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">function type</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">extern type</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isStatic</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isConst</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isVariadic</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">min arity</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">max arity*</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of paramDecls</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">list of param decls</td><td style="text-align:left;">255</td><td style="text-align:left;">bytecode list</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">has return type</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">return type</td><td style="text-align:left;">...</td><td style="text-align:left;">HTTypeId</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">hasBody</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of body</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">body with endOfExec</td><td style="text-align:left;">65,535</td><td style="text-align:left;">bytecode</td><td style="text-align:left;">true</td></tr></tbody></table><p>arity*:</p><ul><li>0 when there&#39;s only one variadic parameter</li><li>2 when there&#39;s 2 positional parameters and 1 optional parameter</li></ul><h2 id="class-declaration"><a class="header-anchor" href="#class-declaration" aria-hidden="true">#</a> Class declaration</h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">type params</td><td style="text-align:left;">...</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">class type</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">super class id</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of func decls</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">list of func decls</td><td style="text-align:left;">65,535</td><td style="text-align:left;">bytecode list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of var decls</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">list of var decls</td><td style="text-align:left;">65,535</td><td style="text-align:left;">bytecode list</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="enum-declaration"><a class="header-anchor" href="#enum-declaration" aria-hidden="true">#</a> Enum declaration</h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">isExtern</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of id list</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">list of enum ids</td><td style="text-align:left;">65,535</td><td style="text-align:left;">short utf8 string list</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="control-flow"><a class="header-anchor" href="#control-flow" aria-hidden="true">#</a> Control flow</h2><h3 id="if"><a class="header-anchor" href="#if" aria-hidden="true">#</a> If</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">condition</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">HTOpCode.ifStmt</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">then branch length + 2</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">then branch</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">HTOpCode.goto</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">else branch length</td><td style="text-align:left;">...</td><td style="text-align:left;">int16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">else branch</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;">true</td></tr></tbody></table><h3 id="while"><a class="header-anchor" href="#while" aria-hidden="true">#</a> While</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">HTOpCode.loopPoint</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of loop</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">condition</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">HTOpCode.whileStmt</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">has condition</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">loop</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">HTOpCode.goto</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-(length of loop)</td><td style="text-align:left;">1</td><td style="text-align:left;">int16</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="do"><a class="header-anchor" href="#do" aria-hidden="true">#</a> Do</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">HTOpCode.loopPoint</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of loop</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">loop</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">condition</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">HTOpCode.doStmt</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr></tbody></table><p>has condition *: This option is always true in Do statement.</p><h3 id="for"><a class="header-anchor" href="#for" aria-hidden="true">#</a> For</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">init</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">HTOpCode.loopPoint</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of loop</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">condition</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">HTOpCode.whileStmt</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">has condition</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">loop</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">increment</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">HTOpCode.goto</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">-(length of loop)</td><td style="text-align:left;">1</td><td style="text-align:left;">int16</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="forin-forof"><a class="header-anchor" href="#forin-forof" aria-hidden="true">#</a> ForIn &amp; ForOf</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">object</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">HTOpCode.forStmt</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">ForStmtType</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">var decl keyword</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">var name</td><td style="text-align:left;">256</td><td style="text-align:left;">short utf8 string</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of loop</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">loop</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="when"><a class="header-anchor" href="#when" aria-hidden="true">#</a> When</h3><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Bytes length</th><th style="text-align:left;">type</th><th style="text-align:left;">optional</th></tr></thead><tbody><tr><td style="text-align:left;">condition</td><td style="text-align:left;">...</td><td style="text-align:left;">uint8 list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">HTOpCode.whenStmt</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">has condition</td><td style="text-align:left;">1</td><td style="text-align:left;">bool</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of cases</td><td style="text-align:left;">1</td><td style="text-align:left;">byte</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">ip of case as list</td><td style="text-align:left;">...</td><td style="text-align:left;">uint16 list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">ip of branch as list</td><td style="text-align:left;">...</td><td style="text-align:left;">uint16 list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">list of cases</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">list branchese</td><td style="text-align:left;">...</td><td style="text-align:left;">bytecode list</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">ip of else</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">length of else</td><td style="text-align:left;">2</td><td style="text-align:left;">uint16</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">else</td><td style="text-align:left;">...</td><td style="text-align:left;">uint8 list</td><td style="text-align:left;"></td></tr></tbody></table>',43);a.render=function(l,d,a,n,s,y){return t(),e("div",null,[i])};export default a;export{d as __pageData};
