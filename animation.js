(function () {
    console.log("import")
    
    this.initiate = () => {
        console.log("initiated")
        this.defaults = {
            objects: [],
            objectsLength: 100,
            objectSize: 15,
            transitionDuration: 50,
            aninationDuration: 500,
            pulse: true,
            rotate: true,
            shuffle: false
        };

        this.options = defaults;

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendOptions(defaults, arguments[0]);
        }

        for (let i = 0; i < options.objectsLength; i++) {
            let div = document.createElement('div');
            Object.assign(div.style, getStyle(i));
            document.body.appendChild(div);
            if (options.pulse)
                div.animate([
                    { transform: "scale(1.2)" },
                    { transform: "scale(0.8)" },
                ],
                    {
                        duration: options.aninationDuration,
                        iterations: "Infinity",
                        easing: "ease-in-out",
                        direction: "alternate",
                    })
            options.objects.push(div);
        };

        document.body.onmousemove = (e) => moveObject(e);
    }

    function extendOptions(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    moveObject = (e) => {
        if (options.shuffle) objects = objects.shuffled();
        options.objects.forEach((o, i) => {
            let randomX = getRandom(i, options.objectsLength);
            let randomY = getRandom(i, options.objectsLength);
            o.style.left = `${(e.pageX) + randomX}px`;
            o.style.top = `${e.pageY + randomY}px`;

            if (options.rotate)
                o.animate([
                    { transform: "rotate(0deg)" },
                    { transform: "rotate(360deg)" },
                ],
                    {
                        duration: options.aninationDuration,
                        iterations: i / 10,
                    });
        })
    }

    getRandom = (i, length) => {
        return ((i * (Math.random() - 0.5)) * (length / 10));
    }

    function getStyle(i) {
        return style = {
            position: "absolute",
            width: `${options.objectSize}px`,
            height: `${options.objectSize}px`,
            transition: `all ${i * options.transitionDuration}ms ease `,
            backgroundColor: `#${i}${i}${i}`
        };
    }

    Array.prototype.shuffled = function () {
        return this.map(function (n) { return [Math.random(), n] })
            .sort()
            .map(function (n) { return n[1] });
    }
    this.initiate();

})();


