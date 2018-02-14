block('tile').mod('type', 'horizontal')(
    js()(true),

    elem('arrow')(
        tag()('a'),

        addAttrs()(function (json, ctx) {
            return {
                href: '#'
            }
        })
    )
);
