block('tile')(
    elem('title')(
        tag()('h3')
    ),

    elem('item')(
        tag()('a'),

        addAttrs()(function (json, ctx) {
            return {
                href: ctx.url
            }
        })
    ),

    elem('item-image')(
        tag()('img'),

        addAttrs()(function (json, ctx) {
            return {
                src: ctx.url
            }
        })
    ),

    elem('item-title')(
        tag()('span')
    )
);
