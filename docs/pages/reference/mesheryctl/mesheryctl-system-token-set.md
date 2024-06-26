---
layout: default
title: mesheryctl-system-token-set
permalink: reference/mesheryctl/system/token/set
redirect_from: reference/mesheryctl/system/token/set/
type: reference
display-title: "false"
language: en
command: system
subcommand: token
---

# mesheryctl system token set

Set token for context

## Synopsis

Set token for current context or context specified with --context flag.

<pre class='codeblock-pre'>
<div class='codeblock'>
mesheryctl system token set [flags]

</div>
</pre> 

## Examples

<pre class='codeblock-pre'>
<div class='codeblock'>
mesheryctl system token set [token-name] 

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -h, --help   help for set

</div>
</pre>

## Options inherited from parent commands

<pre class='codeblock-pre'>
<div class='codeblock'>
      --config string    path to config file (default "/home/runner/.meshery/config.yaml")
  -c, --context string   (optional) temporarily change the current context.
  -v, --verbose          verbose output
  -y, --yes              (optional) assume yes for user interactive prompts.

</div>
</pre>

## See Also

Go back to [command reference index](/reference/mesheryctl/) 
