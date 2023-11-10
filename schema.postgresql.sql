CREATE TABLE public.projects (
    id character varying NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    status character varying NOT NULL,

    links json
);
ALTER TABLE public.projects OWNER TO "personalPortfolio";
ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


CREATE TABLE public.companies (
    id character varying NOT NULL,
    name character varying NOT NULL,
    icon character varying NOT NULL,
    link character varying NOT NULL,
    date timestamp without time zone
);
ALTER TABLE public.companies OWNER TO "personalPortfolio";
ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (id);