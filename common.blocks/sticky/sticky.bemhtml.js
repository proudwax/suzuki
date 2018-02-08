block('sticky')(
    js()(true),

    content()(function () {
        return {
            elem: 'container',
            content: applyNext()
        };
    })
);
