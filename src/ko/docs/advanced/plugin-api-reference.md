# 플러그인 API 참조

이 API는 AiScript의 확장으로, Mk:로 시작하는 API는 Play에서도 활용할 수 있습니다.

## Mk:dialog(title text type)

대화 상자를 표시합니다. type에는 다음 값을 설정할 수 있습니다.

- info
- success
- warn
- error
- question

생략하면 info가됩니다.

## Mk:confirm(title text type)

확인 대화 상자를 표시합니다. type에는 다음 값을 설정할 수 있습니다.

- info
- success
- warn
- error
- question

생략하면 question이 됩니다. \
사용자가 "OK"를 선택하면 true를 반환하고 "취소"를 선택하면 false를 반환합니다.

## Mk:api(endpoint params)

Misskey API에 요청합니다. 첫 번째 인수에 끝점 이름을, 두 번째 인수에 매개 변수 개체를 전달합니다.

## Mk:save(key value)

임의의 값에 임의의 이름을 붙여 영속화합니다. 지속된 값은 AiScript 컨텍스트가 끝나더라도 남아 있으며 Mk:load에서 읽을 수 있습니다.

## Mk:load(key)

Mk:save로 지속된 지정된 이름의 값을 읽습니다.

## Plugin:register_post_form_action(title fn)

게시 양식에 액션을 추가합니다. 첫 번째 인수에 액션 이름, 두 번째 인수에 액션이 선택되었을 때 콜백 함수를 전달합니다. \
콜백 함수는 첫 번째 인수에 게시 양식 객체를 전달합니다.

## Plugin:register_note_action(title fn)

노트 메뉴에 항목을 추가합니다. 첫 번째 인수에 항목 이름을, 두 번째 인수에 항목이 선택되었을 때 콜백 함수를 전달합니다. \
콜백 함수는 첫 번째 인수로 대상 노트 객체를 전달합니다.

## Plugin:register_user_action(title fn)

사용자 메뉴에 항목을 추가합니다. 첫 번째 인수에 항목 이름을, 두 번째 인수에 항목이 선택되었을 때 콜백 함수를 전달합니다. \
콜백 함수는 첫 번째 인수로 대상 사용자 객체를 전달합니다.

## Plugin:register_note_view_interruptor(fn)

UI에 표시되는 노트 정보를 다시 씁니다. \
콜백 함수는 첫 번째 인수로 대상 노트 객체를 전달합니다. \
콜백 함수의 반환 값으로 노트를 다시 씁니다.

## Plugin:register_note_post_interruptor(fn)

노트를 게시할 때 노트 정보를 다시 씁니다. \
콜백 함수는 첫 번째 인수로 대상 노트 객체를 전달합니다. \
콜백 함수의 반환 값으로 노트를 다시 씁니다.

## Plugin:open_url(url)

첫 번째 인수에 전달된 URL을 브라우저의 새 탭에서 엽니다.

## Plugin:config

플러그인 설정이 저장되는 객체. 플러그인 정의의 config에서 설정한 키로 값이 들어갑니다.
