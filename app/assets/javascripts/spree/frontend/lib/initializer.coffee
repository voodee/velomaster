class @Initializer

  constructor: (obj, func, func2) ->
    unless func2
      func2 = ->

    $(obj).each (i, val) ->

      unless $(val).hasClass 'initializ'
        $(val).addClass 'initializ'
        func $(val)
      else
        func2 $(val)