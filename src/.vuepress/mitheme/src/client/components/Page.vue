<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
</script>

<template>
  <main class="page">
		<MkDots :class="$style.headerDots"/>

    <div class="theme-default-content">
      <Content />
    </div>

    <PageMeta />

    <PageNav />

		<MkRelatedPages/>

		<MkDots :class="$style.footerDots"/>
		<div :class="$style.footer">Copyright &copy; 2022 syuilo and other contributors</div>
  </main>
</template>

<style lang="scss">
@import '../styles/_mixins';
@import '../styles/_variables';

.page {
  padding-bottom: 2rem;
  display: block;

  .theme-default-content {
    @include content_wrapper;
    padding-top: 0;
  }
}

.page-meta {
  @include content_wrapper;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;

  .meta-item {
    cursor: default;
    margin-top: 0.8rem;

    .meta-item-label {
      font-weight: 500;
      color: var(--c-text-lighter);
    }

    .meta-item-info {
      font-weight: 400;
      color: var(--c-text-quote);
    }
  }

  .edit-link {
    display: inline-block;
    margin-right: 0.25rem;
  }

  .last-updated {
    float: right;
  }
}

@media (max-width: $MQMobile) {
  .page-meta {
    .last-updated {
      font-size: 0.8em;
      float: none;
    }

    .contributors {
      font-size: 0.8em;
    }
  }
}

.page-nav {
  @include content_wrapper;
  padding-top: 1rem;
  padding-bottom: 0;

  .inner {
    min-height: 2rem;
    margin-top: 0;
    border-top: 1px solid var(--c-border);
    transition: border-color var(--t-color);
    padding-top: 1rem;
    overflow: auto;
  }

  .prev {
    a:before {
      content: '←';
    }
  }
  .next {
    float: right;
    a:after {
      content: '→';
    }
  }
}
</style>

<style lang="scss" module>
.footer {
	text-align: center;
}

.headerDots {
	display: block;
	margin: 2em auto 0 auto;
	width: 100%;
	max-width: min(var(--content-width), calc(100% - 4rem));
	height: 40px;
	opacity: 1;
	color: var(--c-brand);
}

.footerDots {
	display: block;
	margin: 2em auto;
	width: 100%;
	max-width: min(var(--content-width), calc(100% - 4rem));
	height: 70px;
	opacity: 0.2;
}
</style>
